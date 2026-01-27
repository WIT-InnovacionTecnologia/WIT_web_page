import { forwardRef, useImperativeHandle, useRef, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils.js';

type UniformValue = THREE.IUniform<unknown> | unknown;

interface ExtendMaterialConfig {
    header: string;
    vertexHeader?: string;
    fragmentHeader?: string;
    material?: THREE.MeshPhysicalMaterialParameters & { fog?: boolean };
    uniforms?: Record<string, UniformValue>;
    vertex?: Record<string, string>;
    fragment?: Record<string, string>;
}

type ShaderWithDefines = THREE.ShaderLibShader & {
    defines?: Record<string, string | number | boolean>;
};

function extendMaterial<T extends THREE.Material = THREE.Material>(
    BaseMaterial: new (params?: THREE.MaterialParameters) => T,
    cfg: ExtendMaterialConfig
): THREE.ShaderMaterial {
    const physical = THREE.ShaderLib.physical as ShaderWithDefines;
    const { vertexShader: baseVert, fragmentShader: baseFrag, uniforms: baseUniforms } = physical;
    const baseDefines = physical.defines ?? {};

    const uniforms: Record<string, THREE.IUniform> = THREE.UniformsUtils.clone(baseUniforms);

    const defaults = new BaseMaterial(cfg.material || {}) as T & {
        color?: THREE.Color;
        roughness?: number;
        metalness?: number;
        envMap?: THREE.Texture;
        envMapIntensity?: number;
    };

    if (defaults.color) uniforms.diffuse.value = defaults.color;
    if ('roughness' in defaults) uniforms.roughness.value = defaults.roughness;
    if ('metalness' in defaults) uniforms.metalness.value = defaults.metalness;
    if ('envMap' in defaults) uniforms.envMap.value = defaults.envMap;
    if ('envMapIntensity' in defaults) uniforms.envMapIntensity.value = defaults.envMapIntensity;

    Object.entries(cfg.uniforms ?? {}).forEach(([key, u]) => {
        uniforms[key] =
            u !== null && typeof u === 'object' && 'value' in u
                ? (u as THREE.IUniform<unknown>)
                : ({ value: u } as THREE.IUniform<unknown>);
    });

    let vert = `${cfg.header}\n${cfg.vertexHeader ?? ''}\n${baseVert}`;
    let frag = `${cfg.header}\n${cfg.fragmentHeader ?? ''}\n${baseFrag}`;

    for (const [inc, code] of Object.entries(cfg.vertex ?? {})) {
        vert = vert.replace(inc, `${inc}\n${code}`);
    }
    for (const [inc, code] of Object.entries(cfg.fragment ?? {})) {
        frag = frag.replace(inc, `${inc}\n${code}`);
    }

    const mat = new THREE.ShaderMaterial({
        defines: { ...baseDefines },
        uniforms,
        vertexShader: vert,
        fragmentShader: frag,
        lights: true,
        fog: !!cfg.material?.fog
    });

    return mat;
}

const CanvasWrapper: FC<{ children: ReactNode }> = ({ children }) => (
    <Canvas dpr={[1, 2]} frameloop="always" className="w-full h-full relative">
        {children}
    </Canvas>
);

const hexToNormalizedRGB = (hex: string): [number, number, number] => {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return [r / 255, g / 255, b / 255];
};

const noise = `
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}
`;

interface BeamsProps {
    beamWidth?: number;
    beamHeight?: number;
    beamNumber?: number;
    lightColor?: string;
    speed?: number;
    noiseIntensity?: number;
    scale?: number;
    rotation?: number;
}

const Beams: FC<BeamsProps> = ({
    beamWidth = 2,
    beamHeight = 15,
    beamNumber = 12,
    lightColor = '#ffffff',
    speed = 2,
    noiseIntensity = 1.75,
    scale = 0.2,
    rotation = 0
}) => {
    const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null!);

    const beamMaterial = useMemo(
        () =>
            extendMaterial(THREE.MeshStandardMaterial, {
                header: `
  varying vec3 vEye;
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  uniform float uSpeed;
  uniform float uNoiseIntensity;
  uniform float uScale;
  ${noise}`,
                vertexHeader: `
  float getPos(vec3 pos) {
    vec3 noisePos =
      vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;
    return noise(noisePos.xy); 
  }
  vec3 getCurrentPos(vec3 pos) {
    vec3 newpos = pos;
    newpos.z += getPos(pos);
    return newpos;
  }
  vec3 getNormal(vec3 pos) {
    vec3 curpos = getCurrentPos(pos);
    vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));
    vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));
    vec3 tangentX = normalize(nextposX - curpos);
    vec3 tangentZ = normalize(nextposZ - curpos);
    return normalize(cross(tangentZ, tangentX));
  }`,
                vertex: {
                    '#include <begin_vertex>': `transformed.z += getPos(transformed.xyz);`,
                    '#include <beginnormal_vertex>': `objectNormal = getNormal(position.xyz);`
                },
                fragment: {
                    '#include <dithering_fragment>': `
    float randomNoise = noise(gl_FragCoord.xy);
    gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`
                },
                material: { fog: true },
                uniforms: {
                    diffuse: new THREE.Color(...hexToNormalizedRGB('#000000')),
                    time: { value: 0 },
                    roughness: 0.3,
                    metalness: 0.3,
                    uSpeed: { value: speed },
                    envMapIntensity: 10,
                    uNoiseIntensity: noiseIntensity,
                    uScale: scale
                }
            }),
        [speed, noiseIntensity, scale]
    );

    return (
        <CanvasWrapper>
            <group rotation={[0, 0, degToRad(rotation)]}>
                <PlaneNoise ref={meshRef} material={beamMaterial} count={beamNumber} width={beamWidth} height={beamHeight} />
                <DirLight color={lightColor} position={[0, 3, 10]} />
            </group>
            <ambientLight intensity={1} />
            <color attach="background" args={['#000000']} />
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={30} />
        </CanvasWrapper>
    );
};

function createStackedPlanesBufferGeometry(
    n: number,
    width: number,
    height: number,
    spacing: number,
    heightSegments: number
): THREE.BufferGeometry {
    const geometry = new THREE.BufferGeometry();
    const numVertices = n * (heightSegments + 1) * 2;
    const numFaces = n * heightSegments * 2;
    const positions = new Float32Array(numVertices * 3);
    const indices = new Uint32Array(numFaces * 3);
    const uvs = new Float32Array(numVertices * 2);

    let vertexOffset = 0;
    let indexOffset = 0;
    let uvOffset = 0;
    const totalWidth = n * width + (n - 1) * spacing;
    const xOffsetBase = -totalWidth / 2;

    for (let i = 0; i < n; i++) {
        const xOffset = xOffsetBase + i * (width + spacing);
        const uvXOffset = Math.random() * 300;
        const uvYOffset = Math.random() * 300;

        for (let j = 0; j <= heightSegments; j++) {
            const y = height * (j / heightSegments - 0.5);
            positions.set([xOffset, y, 0, xOffset + width, y, 0], vertexOffset * 3);

            const uvY = j / heightSegments;
            uvs.set([uvXOffset, uvY + uvYOffset, uvXOffset + 1, uvY + uvYOffset], uvOffset);

            if (j < heightSegments) {
                const a = vertexOffset, b = vertexOffset + 1, c = vertexOffset + 2, d = vertexOffset + 3;
                indices.set([a, b, c, c, b, d], indexOffset);
                indexOffset += 6;
            }
            vertexOffset += 2;
            uvOffset += 4;
        }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.computeVertexNormals();
    return geometry;
}

const MergedPlanes = forwardRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>, { material: THREE.ShaderMaterial; width: number; count: number; height: number; }>(({ material, width, count, height }, ref) => {
    const mesh = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null!);
    useImperativeHandle(ref, () => mesh.current);
    const geometry = useMemo(() => createStackedPlanesBufferGeometry(count, width, height, 0, 100), [count, width, height]);
    useFrame((_state, delta) => {
        if (mesh.current) mesh.current.material.uniforms.time.value += 0.1 * delta;
    });
    return <mesh ref={mesh} geometry={geometry} material={material} />;
});

const PlaneNoise = forwardRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>, { material: THREE.ShaderMaterial; width: number; count: number; height: number; }>((props, ref) => (
    <MergedPlanes ref={ref} {...props} />
));

const DirLight: FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
    const dir = useRef<THREE.DirectionalLight>(null!);
    return <directionalLight ref={dir} color={color} intensity={1} position={position} />;
};

export default Beams;

import { motion } from 'framer-motion';

// Light Mode Assets (Contrast with White)
import pullmanLight from '../assets/light/Logo-Pullman-blanco (1).png';
import parqueAraucoLight from '../assets/light/Logo_Parque_Arauco.png';
import transantiagoLight from '../assets/light/Transantiago_Logo.svg.png';
import nilahueLight from '../assets/light/logo-buses-nilahue.jpg';
import lbayasLight from '../assets/light/LBayas_plantilla-1.png';
import mutualLight from '../assets/light/logo-mutual@2x.png';
import igillaimaLight from '../assets/light/igillaima (1).png';
import tandemLight from '../assets/light/TANDEM - CON SLOGAN - COLORES COMPLETOS.png';
import aramarkLight from '../assets/light/1529995095_xpurepng.com_aramark_logologobrand_logoiconslogos_251519940138mhlp9.png.pagespeed.ic.uZRFUDYKRa (1).png';
import bancoEstadoLight from '../assets/light/logo-banco-estado.png';

// Dark Mode Assets (Contrast with Black)
import pullmanDark from '../assets/dark/Logo-Pullman-blanco.png';
import metroDark from '../assets/dark/Metro_de_Santiago_Logo-2blanco.png';
import transantinDark from '../assets/dark/TRANSANTIN LOGO - blanco.png';
import igillaimaDark from '../assets/dark/igillaima.png';
import mutualDark from '../assets/dark/logo-mutual@2x.png';
import tandemDark from '../assets/dark/TANDEM - CON SLOGAN - COLORES COMPLETOS.png';

import type { CSSProperties } from 'react';

interface Logo {
    src: string;
    alt: string;
    scale?: number;
    style?: CSSProperties;
}

const lightLogos: Logo[] = [
    { src: pullmanLight, alt: "Pullman Bus", scale: 2.0, style: { filter: 'invert(1) brightness(0)' } },
    { src: parqueAraucoLight, alt: "Parque Arauco", scale: 0.8 },
    { src: transantiagoLight, alt: "Transantiago" },
    { src: nilahueLight, alt: "Buses Nilahue" },
    { src: lbayasLight, alt: "LBayas" },
    { src: mutualLight, alt: "Mutual de Seguridad" },
    { src: igillaimaLight, alt: "Igillaima" },
    { src: tandemLight, alt: "Tandem" },
    { src: aramarkLight, alt: "Aramark" },
    { src: bancoEstadoLight, alt: "Banco Estado" },
];

const darkLogos: Logo[] = [
    { src: pullmanDark, alt: "Pullman Bus" },
    { src: metroDark, alt: "Metro de Santiago" },
    { src: transantinDark, alt: "Transantin" },
    { src: igillaimaDark, alt: "Igillaima" },
    { src: mutualDark, alt: "Mutual de Seguridad" },
    { src: tandemDark, alt: "Tandem" },
];

export const LogoWall = () => {
    // Repeat lists to ensure seamless marquee
    const repeatedLightLogos = [...lightLogos, ...lightLogos, ...lightLogos];
    const repeatedDarkLogos = [...darkLogos, ...darkLogos, ...darkLogos, ...darkLogos];

    return (
        <section className="relative z-0 py-12 bg-white dark:bg-black overflow-hidden border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Confían en nosotros
                </p>
            </div>

            {/* LIGHT MODE MARQUEE */}
            <div className="flex relative overflow-hidden dark:hidden">
                <motion.div
                    className="flex gap-16 items-center min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {repeatedLightLogos.map((logo, index) => (
                        <div
                            key={`light-${index}`}
                            className="flex-shrink-0 relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    transform: logo.scale ? `scale(${logo.scale})` : 'scale(1)',
                                    ...logo.style
                                }}
                                className="max-w-full max-h-full object-contain mix-blend-multiply"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* DARK MODE MARQUEE */}
            <div className="hidden dark:flex relative overflow-hidden">
                <motion.div
                    className="flex gap-16 items-center min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {repeatedDarkLogos.map((logo, index) => (
                        <div
                            key={`dark-${index}`}
                            className="flex-shrink-0 relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{ transform: logo.scale ? `scale(${logo.scale})` : 'scale(1)' }}
                                className="max-w-full max-h-full object-contain mix-blend-screen"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

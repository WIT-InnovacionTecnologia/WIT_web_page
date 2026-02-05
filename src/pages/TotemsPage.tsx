import { ProductPage } from './ProductPage';
import totemImage from '../assets/totem.jpg';

export const TotemsPage = () => {
    const totemsData = {
        productName: 'Totems',
        tagline: 'Interacción física con poder digital',
        description: 'Puntos de interacción inteligente diseñados para transformar la experiencia del usuario en espacios públicos y comerciales.',
        features: [
            'Pantallas táctiles de alta resolución',
            'Diseño premium y personalizable',
            'Sistema de gestión remota de contenido',
            'Interacción mediante sensores de proximidad',
            'Hardware de alto rendimiento 24/7',
            'Analítica de interacción en tiempo real'
        ],
        images: [
            {
                url: totemImage,
                alt: 'Totem Interactivo',
                type: 'image' as const
            }
        ],
        specs: [
            { label: 'Pantalla', value: '55" Ultra HD Tactil' },
            { label: 'Brillo', value: '3000 nits (Legible bajo sol)' },
            { label: 'Hardware', value: 'i7 12th Gen, 16GB RAM' },
            { label: 'Conectividad', value: 'WiFi 6, 5G, Ethernet' },
            { label: 'Cámara', value: '12MP para analítica facial' },
            { label: 'Estructura', value: 'Acero inoxidable y vidrio templado' }
        ]
    };

    return <ProductPage {...totemsData} />;
};

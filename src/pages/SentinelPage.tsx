import { ProductPage } from './ProductPage';
import sentinelImage from '../assets/SENTINEL.png';

export const SentinelPage = () => {
    const sentinelData = {
        productName: 'Sentinel',
        tagline: 'Vigilancia inteligente para tu seguridad',
        description: 'Sistema de monitoreo avanzado con IA integrada',
        price: 'Desde $2,999',
        features: [
            'Monitoreo en tiempo real 24/7',
            'Detección inteligente de amenazas con IA',
            'Alertas instantáneas a múltiples dispositivos',
            'Almacenamiento en la nube seguro',
            'Interfaz intuitiva y fácil de usar',
            'Integración con sistemas existentes'
        ],
        images: [
            {
                url: sentinelImage,
                alt: 'Sentinel - Vista principal',
                type: 'image' as const
            }
        ],
        specs: [
            { label: 'Resolución de cámara', value: '4K Ultra HD' },
            { label: 'Visión nocturna', value: 'Hasta 30m' },
            { label: 'Ángulo de visión', value: '360°' },
            { label: 'Conectividad', value: 'WiFi 6, Ethernet, 4G LTE' },
            { label: 'Almacenamiento', value: 'Cloud ilimitado o local hasta 2TB' },
            { label: 'Alimentación', value: 'PoE o adaptador 12V' },
            { label: 'Resistencia', value: 'IP67 - A prueba de agua y polvo' },
            { label: 'IA integrada', value: 'Reconocimiento facial y de objetos' },
            { label: 'Garantía', value: '2 años' }
        ]
    };

    return <ProductPage {...sentinelData} />;
};

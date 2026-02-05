import { ProductPage } from './ProductPage';
import wifiUrbanImage from '../assets/WIFI URBAN.jpg';

export const WifiUrbanPage = () => {
    const wifiData = {
        productName: 'WiFi Urban',
        tagline: 'Conectividad ciudadana de alto estándar',
        description: 'Soluciones de conectividad pública inteligente para ciudades inteligentes y espacios de alta densidad.',
        features: [
            'Conexión de alta velocidad para miles de usuarios',
            'Panel de gestión de red inteligente',
            'Portal cautivo personalizable',
            'Filtros de seguridad y contenido avanzado',
            'Monitoreo de densidad y tráfico peatonal',
            'Infraestructura resistente a exteriores'
        ],
        images: [
            {
                url: wifiUrbanImage,
                alt: 'WiFi Urban Connectivity',
                type: 'image' as const
            }
        ],
        specs: [
            { label: 'Estándar', value: 'WiFi 6E Ready' },
            { label: 'Densidad', value: 'Hasta 500 usuarios por nodo' },
            { label: 'Cobertura', value: 'Hasta 200m en línea de vista' },
            { label: 'Seguridad', value: 'WPA3 Enterprise' },
            { label: 'Alimentación', value: 'PoE+ o Energía Solar' },
            { label: 'Protección', value: 'Certificación IK10 / IP67' }
        ]
    };

    return <ProductPage {...wifiData} />;
};

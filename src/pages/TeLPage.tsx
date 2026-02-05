import { ProductPage } from './ProductPage';
import telImage from '../assets/TEL.png';

export const TeLPage = () => {
    const telData = {
        productName: 'TeL',
        tagline: 'Monitoreo remoto en tiempo real',
        description: 'Plataforma de telemetría de alta precisión para gestión de activos y procesos industriales.',
        features: [
            'Seguimiento y telemetría en tiempo real',
            'Alertas inteligentes personalizables',
            'Dashboard interactivo de control',
            'Reportes automáticos y analítica',
            'Integración con sensores industriales',
            'Soporte multiplataforma 24/7'
        ],
        images: [
            {
                url: telImage,
                alt: 'TeL - Panel de Control',
                type: 'image' as const
            }
        ],
        specs: [
            { label: 'Protocolos', value: 'MQTT, HTTP, Modbus' },
            { label: 'Frecuencia de muestreo', value: 'Hasta 1ms' },
            { label: 'Conectividad', value: 'GPRS, 4G, Satelital, LoRaWAN' },
            { label: 'Seguridad', value: 'Encriptación AES-256' },
            { label: 'Capacidad', value: 'Hasta 10.000 dispositivos' },
            { label: 'Compatibilidad', value: 'Sensores de temperatura, presión, nivel' }
        ]
    };

    return <ProductPage {...telData} />;
};

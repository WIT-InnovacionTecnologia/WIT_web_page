import { ProductPage } from './ProductPage';

export const IoTPage = () => {
    const iotData = {
        productName: 'IoT',
        tagline: 'Conectividad total para tus dispositivos',
        description: 'Soluciones IoT personalizadas para transformar tu infraestructura física en una red digital inteligente.',
        features: [
            'Ecosistema de sensores inteligentes',
            'Gestión centralizada de dispositivos',
            'Escalabilidad para miles de nodos',
            'Optimización de consumo energético',
            'Análisis predictivo de datos',
            'Arquitectura en la nube segura'
        ],
        images: [
            {
                url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
                alt: 'IoT Infrastructure',
                type: 'image' as const
            }
        ],
        specs: [
            { label: 'Chipset', value: 'WIT Quantum 2.1' },
            { label: 'Autonomía', value: 'Hasta 5 años de batería' },
            { label: 'Alcance', value: 'Hasta 15km (LoRa)' },
            { label: 'Integración', value: 'WIT Cloud Services' },
            { label: 'Sensores compatibles', value: 'Humedad, CO2, Movimiento, Luz' },
            { label: 'Protección', value: 'IP68 Sumergible' }
        ]
    };

    return <ProductPage {...iotData} />;
};

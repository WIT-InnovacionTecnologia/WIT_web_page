import { ProductPage } from './ProductPage';
import ecommerceImage from '../assets/E COMMERCE2.png';

export const EcommercePage = () => {
    const ecommerceData = {
        productName: 'E-commerce',
        tagline: 'Tu tienda digital sin límites',
        description: 'Plataforma de comercio electrónico de alto rendimiento diseñada para escalar tu negocio y maximizar conversiones.',
        features: [
            'Experiencia de compra fluida e intuitiva',
            'Gestión de inventario de última generación',
            'Optimización para motores de búsqueda (SEO)',
            'Pasarelas de pago globales integradas',
            'Arquitectura escalable de alta disponibilidad',
            'Analítica de ventas profunda integrada'
        ],
        images: [
            {
                url: ecommerceImage,
                alt: 'Plataforma E-commerce',
                type: 'image' as const
            }
        ],
        specs: [
            { label: 'Tecnología', value: 'Next.js & Microservicios' },
            { label: 'Tiempo de carga', value: '< 1 seg LCP' },
            { label: 'Soporte de pagos', value: 'Webpay, Stripe, PayPal' },
            { label: 'Infraestructura', value: 'AWS / Google Cloud' },
            { label: 'Seguridad', value: 'Cumplimiento PCI DSS' },
            { label: 'API', value: 'GraphQL para integraciones' }
        ]
    };

    return <ProductPage {...ecommerceData} />;
};

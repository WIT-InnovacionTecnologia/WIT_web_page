import { useTranslation } from 'react-i18next';
import { ProductPage } from './ProductPage';
import sentinelImage from '../assets/SENTINEL.png';

export const SentinelPage = () => {
    const { t } = useTranslation();

    const sentinelData = {
        productName: 'Sentinel',
        tagline: t('product.sentinel.tagline'),
        description: t('product.sentinel.description'),
        features: t('product.sentinel.features', { returnObjects: true }) as string[],
        images: [
            {
                url: sentinelImage,
                alt: t('product.sentinel.alt'),
                type: 'image' as const
            }
        ],
        specs: t('product.sentinel.specs', { returnObjects: true }) as { label: string; value: string }[]
    };

    return <ProductPage {...sentinelData} />;
};

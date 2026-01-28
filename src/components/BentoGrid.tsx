import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MagicBento from './animations/MagicBento';
import type { BentoCardProps } from './animations/MagicBento';

export const BentoGrid = () => {
    const { t } = useTranslation();

    const products = [
        {
            id: 1,
            title: t('showcase.ai_title'),
            description: 'Inteligencia que evoluciona. ' + t('showcase.ai_desc'),
            color: '#000000'
        },
        {
            id: 2,
            title: t('showcase.fleet_title'),
            description: 'Control total de tu flota. ' + t('showcase.fleet_desc'),
            color: '#1a1a1a'
        },
        {
            id: 3,
            title: t('showcase.movie_title'),
            description: 'Cine a bordo, sin límites. ' + t('showcase.movie_desc'),
            color: '#000000'
        },
        {
            id: 4,
            title: t('showcase.wifi_title'),
            description: 'Más que solo conexión. ' + t('showcase.wifi_desc'),
            color: '#1a1a1a'
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto bg-white dark:bg-transparent transition-colors duration-300">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-semibold mb-12 text-center text-black dark:text-white"
            >
                {t('grid.latest')} <span className="text-gray-400 dark:text-gray-500">{t('grid.whats_new')}</span>
            </motion.h2>

            <div className="flex justify-center">
                <MagicBento
                    data={products as BentoCardProps[]}
                    enableStars={true}
                    enableTilt={true}
                    glowColor="59, 130, 246" // WIT Blue
                />
            </div>
        </section>
    );
};


import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[calc(100vh-44px)] flex flex-col items-center pt-20 pb-10 overflow-hidden bg-white dark:bg-transparent text-center transition-colors duration-300">

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10"
            >
                <h2 className="text-5xl md:text-7xl font-semibold mb-2 text-black dark:text-white tracking-tight">
                    {t('hero.title')}
                </h2>
                <p className="text-2xl md:text-3xl font-medium mb-6 text-black dark:text-gray-200">
                    {t('hero.subtitle')}
                </p>
                <div className="flex justify-center space-x-6">
                    <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition-colors text-lg font-medium">
                        {t('hero.buy')}
                    </button>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline px-6 py-2 text-lg font-medium flex items-center">
                        {t('hero.learn_more')} <span className="text-xs ml-1">›</span>
                    </a>
                </div>
            </motion.div>

            {/* Hero Image / Placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="mt-12 w-full px-4"
            >
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 dark:bg-gray-800 shadow-xl flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Placeholder for User Product Image */}
                    <div className="text-center">
                        <p className="text-gray-400 text-xl md:text-2xl font-medium">Product Image Placeholder</p>
                        <p className="text-gray-300 text-sm mt-2">Replace with your product photo</p>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

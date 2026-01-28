import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-black dark:text-white">
                        {t('about.title')}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
                        {t('about.desc')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col space-y-4"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
                            {t('about.mission_title')}
                        </h3>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                            {t('about.mission_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col space-y-4"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
                            {t('about.vision_title')}
                        </h3>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                            {t('about.vision_desc')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ProductShowcase = () => {
    const { t } = useTranslation();

    // Feature Sections - Change titles and descriptions here
    const features = [
        {
            title: t('showcase.camera_title'),
            description: t('showcase.camera_desc'),
            align: 'left'
        },
        {
            title: t('showcase.battery_title'),
            description: t('showcase.battery_desc'),
            align: 'right'
        },
        {
            title: t('showcase.chip_title'),
            description: t('showcase.chip_desc'),
            align: 'left'
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-transparent overflow-hidden transition-colors duration-300">
            <div className="w-full px-4 md:px-8">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col md:flex-row items-center justify-between py-20 gap-12 md:gap-24 ${feature.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex-1 text-center md:text-left"
                        >
                            <h3 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{feature.description}</p>
                        </motion.div>

                        {/* Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex-1 w-full aspect-square md:aspect-[4/3] bg-gray-50 dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 opacity-50" />
                            <div className="z-10 text-center p-6">
                                <span className="text-6xl mb-4 block">✨</span>
                                <p className="text-gray-400 font-medium">Feature Image Placeholder</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}

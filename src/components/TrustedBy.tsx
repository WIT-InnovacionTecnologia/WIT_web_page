import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const companies = [
    { name: "Metro de Santiago", logo: "Metro" },
    { name: "Parque Arauco", logo: "Parque Arauco" },
    { name: "Pullman Bus", logo: "Pullman" },
    { name: "Claro", logo: "Claro" },
    { name: "Transantiago", logo: "Transantiago" }
];

export const TrustedBy = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 dark:text-gray-400 text-sm font-semibold mb-12 uppercase tracking-widest"
                >
                    {t('trusted.title')}
                </motion.h2>

                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 md:gap-x-24">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                {company.logo}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

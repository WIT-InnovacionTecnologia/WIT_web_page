import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const BentoGrid = () => {
    const { t } = useTranslation();

    // Section Titles
    const sectionTitle = t('grid.latest');
    const sectionSubtitle = t('grid.whats_new');
    const learnMoreText = t('grid.learn_more');
    const buyText = t('grid.buy');

    const products = [
        {
            id: 1,
            title: 'Sentinel',
            subtitle: 'Aumenta la seguridad de tu operación con cámaras de IA que disminuyen accidentes y costos asociados al detectar fatiga y distracciones del conductor en ruta.',
            description: '',
            className: 'md:col-span-2 bg-black text-white',
            theme: 'dark'
        },
        {
            id: 2,
            title: 'TeL (Telemetría Avanzada)',
            subtitle: 'Visualiza alerta antes de fallar o gastar de más; anticipa averías, ahorrando combustible y manteniendo tu fl ota siempre en movimiento, optimizando cada viaje.',
            description: '',
            className: 'md:col-span-1 bg-[#F5F5F7] dark:bg-gray-800 text-black dark:text-white',
            theme: 'light'
        },
        {
            id: 3,
            title: t('grid.iot.title'),
            subtitle: t('grid.iot.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark'
        },
        {
            id: 4,
            title: t('grid.totems.title'),
            subtitle: t('grid.totems.subtitle'),
            description: '',
            className: 'md:col-span-2 bg-[#F5F5F7] dark:bg-gray-800 text-black dark:text-white',
            theme: 'light'
        },
        {
            id: 5,
            title: t('grid.ecommerce.title'),
            subtitle: t('grid.ecommerce.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark'
        },
        {
            id: 6,
            title: t('grid.wifi.title'),
            subtitle: t('grid.wifi.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-[#F5F5F7] dark:bg-gray-800 text-black dark:text-white',
            theme: 'light'
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-white dark:bg-transparent transition-colors duration-300">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-semibold mb-12 text-center text-black dark:text-white"
            >
                {sectionTitle} <span className="text-gray-400 dark:text-gray-500">{sectionSubtitle}</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`relative overflow-hidden h-[500px] group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 ${product.className}`}
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 p-8 z-10">
                            <h3 className="text-3xl md:text-4xl font-semibold text-center leading-tight mb-2">{product.title}</h3>
                            <p className="text-lg font-medium opacity-80 text-center mb-2">{product.subtitle}</p>
                            <p className="text-sm font-medium opacity-70 text-center">{product.description}</p>

                            <div className="mt-8 flex space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="text-blue-500 hover:underline text-sm font-medium">{learnMoreText} &gt;</button>
                                <button className="text-blue-500 hover:underline text-sm font-medium">{buyText} &gt;</button>
                            </div>
                        </div>

                        {/* Placeholder Image Area */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center justify-center">
                            <div className={`w-3/4 h-3/4 flex items-center justify-center opacity-50 ${product.theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                                <span className="text-xs">Product Image</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

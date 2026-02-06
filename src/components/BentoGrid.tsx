
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import totemImage from '../assets/totem.jpg';
import ecommerceImage from '../assets/E COMMERCE2.png';
import wifiUrbanImage from '../assets/WIFI URBAN.jpg';
import telImage from '../assets/TEL.png';
import sentinelImage from '../assets/SENTINEL.png';
import { videoUrls } from '../constants/videoUrls';
import iotBanner from '../assets/baners_vento/BANNER COLORES-01-IOT.png';
import telBanner from '../assets/baners_vento/BANNER COLORES-05-TEL.png';
import iotPoster from '../assets/iot-poster.jpg';

export const BentoGrid = () => {
    const { t } = useTranslation();

    // Section Titles
    const sectionTitle = t('grid.latest');
    const sectionSubtitle = t('grid.whats_new');

    const products = [
        {
            id: 1,
            title: 'Sentinel',
            subtitle: t('grid.sentinel_subtitle'),
            description: '',
            className: 'md:col-span-2 bg-black text-white',
            theme: 'dark',
            image: sentinelImage,
            path: '/products/sentinel'
        },
        {
            id: 2,
            title: 'TeL (Telemetría Avanzada)',
            subtitle: t('grid.tel_subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            image: telImage,
            path: '/products/tel',
            banner: telBanner
        },
        {
            id: 3,
            title: t('grid.iot.title'),
            subtitle: t('grid.iot.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            video: videoUrls.iot,
            path: '/products/iot',
            banner: iotBanner,
            poster: iotPoster
        },
        {
            id: 4,
            title: t('grid.totems.title'),
            subtitle: t('grid.totems.subtitle'),
            description: '',
            className: 'md:col-span-2 bg-[#F5F5F7] dark:bg-gray-800 text-black dark:text-white',
            theme: 'light',
            image: totemImage,
            path: '/products/totems'
        },
        {
            id: 5,
            title: t('grid.ecommerce.title'),
            subtitle: t('grid.ecommerce.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            image: ecommerceImage,
            path: '/products/ecommerce'
        },
        {
            id: 6,
            title: t('grid.wifi.title'),
            subtitle: t('grid.wifi.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            image: wifiUrbanImage,
            path: '/products/wifi-urban'
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-white dark:bg-transparent transition-colors duration-300 overflow-hidden">
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
                        {/* Background Media Logic */}
                        {product.image && (
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                            </div>
                        )}

                        {product.video && (
                            <div className="absolute inset-0 z-0">
                                <video
                                    src={product.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster={product.poster}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                            </div>
                        )}

                        <div className={`absolute inset-0 flex flex-col items-center justify-start pt-12 p-8 z-10 ${(product.image || product.video) ? 'text-white' : ''}`}>
                            {product.banner ? (
                                <img
                                    src={product.banner}
                                    alt={product.title}
                                    className="h-16 w-auto object-contain mb-4 select-none pointer-events-none drop-shadow-md"
                                />
                            ) : (
                                <h3
                                    className="text-3xl md:text-4xl font-semibold text-center leading-tight mb-2"
                                    style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                                >
                                    {product.title}
                                </h3>
                            )}
                            <p
                                className="text-lg font-medium opacity-0 group-hover:opacity-90 text-center mb-2 transition-opacity duration-500"
                                style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                            >
                                {product.subtitle}
                            </p>
                            <p
                                className="text-sm font-medium opacity-80 text-center"
                                style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                            >
                                {product.description}
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link
                                    to={`/request-demo?product=${product.title}`}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${product.image ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                                    style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                                >
                                    {t('product.template.cta_demo')}
                                </Link>
                                <Link
                                    to={product.path}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${product.image ? 'border-2 border-white text-white hover:bg-white/10' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                                    style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                                >
                                    {t('grid.learn_more')}
                                </Link>
                            </div>
                        </div>

                        {/* Placeholder Content (only if no image or video) */}
                        {(!product.image && !product.video) && (
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center justify-center overflow-hidden">
                                <div className={`w-3/4 h-3/4 flex items-center justify-center ${product.theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                                    <span className="text-xs">Product Image</span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

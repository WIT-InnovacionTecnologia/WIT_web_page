import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Play, ArrowRight } from 'lucide-react';
import { SmartVideo } from './SmartVideo';

// Import assets
import { videoUrls } from '../constants/videoUrls';
import iaBanner from '../assets/baners_vento/BANNER COLORES-02-IA.png';
import connPBanner from '../assets/baners_vento/BANNER COLORES-03-connP.png';
import psBanner from '../assets/baners_vento/BANNER COLORES-04-P+S.png';
import pmassPoster from '../assets/pmass-poster.jpg';

export const ProductShowcase = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const features = [
        {
            title: t('showcase.camera_title'),
            description: t('showcase.camera_desc'),
            align: 'left',
            media: videoUrls.ai,
            type: 'video',
            banner: iaBanner
        },
        {
            title: t('showcase.battery_title'),
            description: t('showcase.battery_desc'),
            align: 'right',
            media: videoUrls.pmass,
            type: 'video',
            banner: psBanner,
            poster: pmassPoster
        },
        {
            title: t('showcase.chip_title'),
            description: t('showcase.chip_desc'),
            align: 'left',
            media: videoUrls.connp2,
            type: 'video',
            banner: connPBanner
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-transparent overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col md:flex-row items-center justify-between py-24 gap-16 md:gap-32 ${feature.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                            className="flex-1 text-center md:text-left space-y-8"
                        >
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                                {feature.description}
                            </p>
                            <div className="pt-4">
                                <button
                                    onClick={() => navigate(`/request-demo?product=${feature.title}`)}
                                    className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#0077ed] transition-all flex items-center gap-2 mx-auto md:mx-0 group"
                                >
                                    {t('product.template.cta_demo')}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>

                        {/* iPad-Style Media Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                            className="flex-1 w-full max-w-full aspect-[4/3] relative flex items-center justify-center box-border"
                        >
                            <div className="relative w-full max-w-full h-full bg-[#f5f5f7] dark:bg-[#1d1d1f] p-1.5 rounded-[1.8rem] shadow-2xl ring-1 ring-black/5 dark:ring-white/5 group overflow-hidden box-border">
                                <div className="w-full h-full bg-[#0a0a0a] p-[14px] rounded-[1.4rem] ring-1 ring-white/10">
                                    <div className="w-full h-full overflow-hidden rounded-[1.1rem] bg-black relative shadow-inner">
                                        {/* Banner Header */}
                                        {feature.banner && (
                                            <div className="absolute top-0 left-0 right-0 z-20 w-full">
                                                <img
                                                    src={feature.banner}
                                                    alt={feature.title}
                                                    className="w-full h-auto object-cover select-none pointer-events-none"
                                                />
                                            </div>
                                        )}
                                        {feature.type === 'video' ? (
                                            <SmartVideo
                                                src={feature.media}
                                                poster={feature.poster}
                                                className="w-full h-full"
                                            >
                                                <div className="absolute inset-0 z-10 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 bg-transparent" />
                                            </SmartVideo>
                                        ) : (
                                            <img
                                                src={feature.media}
                                                alt={feature.title}
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                        {feature.type === 'video' && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Play className="w-16 h-16 text-white/40" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}


import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { videoUrls } from '../constants/videoUrls';
import { SmartVideo } from './SmartVideo';
import posterImage from '../assets/hero-poster-real.jpg';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const Hero = () => {
    const { t } = useTranslation();

    // Text Variables for easy access
    const title = t('hero.main_title');
    const subtitle = t('hero.main_subtitle');
    const buyButtonText = t('hero.cta_button');
    const learnMoreText = t('hero.learn_more');

    return (
        <section className="relative min-h-[calc(100vh-44px)] flex flex-col items-center pt-20 pb-10 overflow-hidden bg-white dark:bg-transparent text-center transition-colors duration-500">

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={APPLE_TRANSITION}
                className="z-10"
            >
                <h2 className="text-5xl md:text-7xl font-semibold mb-2 text-black dark:text-white tracking-tight max-w-4xl mx-auto">
                    {title}
                </h2>
                <p className="text-2xl md:text-3xl font-medium mb-12 text-[#86868b] max-w-3xl mx-auto">
                    {subtitle}
                </p>
                <div className="flex justify-center space-x-8">
                    <button
                        onClick={() => window.location.href = '/contact'}
                        className="bg-[#0071e3] text-white rounded-full px-8 py-3 hover:bg-[#0077ed] transition-colors text-xl font-semibold shadow-lg shadow-[#0071e3]/20"
                    >
                        {buyButtonText}
                    </button>
                    <Link to="/contact" className="text-[#0071e3] hover:underline px-6 py-3 text-xl font-semibold flex items-center group">
                        {learnMoreText} <span className="text-xs ml-2 group-hover:translate-x-1 transition-transform">›</span>
                    </Link>
                </div>
            </motion.div>

            {/* Hero Image / Video Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ...APPLE_TRANSITION, delay: 0.2 }}
                className="mt-24 w-full"
            >
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center overflow-hidden border-y border-gray-200 dark:border-gray-700">
                    <SmartVideo
                        src={videoUrls.hero}
                        className="w-full h-full"
                        poster={posterImage}
                    >
                    </SmartVideo>

                    {/* Video Overlay Text */}
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-12">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={APPLE_TRANSITION}
                            className="text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl"
                        >
                            {t('hero.video_overlay_title')}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...APPLE_TRANSITION, delay: 0.1 }}
                            className="text-white text-xl md:text-2xl font-medium max-w-3xl drop-shadow-xl leading-relaxed opacity-90"
                        >
                            {t('hero.video_overlay_desc')}
                        </motion.p>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

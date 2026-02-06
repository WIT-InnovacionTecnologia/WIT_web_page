import { motion } from 'framer-motion';
import { Search, LifeBuoy, BookOpen, MessageSquare, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const SupportPage = () => {
    const { t } = useTranslation();

    const categories = [
        { icon: <ShieldCheck className="w-8 h-8" />, title: t('support.categories.security.title'), desc: t('support.categories.security.desc') },
        { icon: <Wrench className="w-8 h-8" />, title: t('support.categories.technical.title'), desc: t('support.categories.technical.desc') },
        { icon: <BookOpen className="w-8 h-8" />, title: t('support.categories.guides.title'), desc: t('support.categories.guides.desc') },
        { icon: <LifeBuoy className="w-8 h-8" />, title: t('support.categories.warranty.title'), desc: t('support.categories.warranty.desc') }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20 selection:bg-[#0071e3]/20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 text-center py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={APPLE_TRANSITION}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{t('support.hero_title')}</h1>
                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <Search className="text-gray-400 w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder={t('support.search_placeholder')}
                            className="w-full bg-[#f5f5f7] dark:bg-[#111111] border-none rounded-2xl py-6 pl-16 pr-6 text-xl outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border border-transparent dark:border-white/5"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                            className="bg-[#f5f5f7] dark:bg-transparent p-8 rounded-[2.5rem] hover:shadow-xl transition-all cursor-pointer group border border-transparent hover:border-[#0071e3]/30 dark:border-white/5"
                        >
                            <div className="text-[#0071e3] mb-6 inline-block p-4 bg-white dark:bg-black rounded-2xl shadow-sm">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                                {cat.title}
                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#0071e3]" />
                            </h3>
                            <p className="text-[#86868b] font-medium leading-relaxed">
                                {cat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Direct Contact */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={APPLE_TRANSITION}
                    className="bg-[#0071e3] p-12 md:p-20 rounded-[3rem] text-white space-y-8 shadow-2xl shadow-[#0071e3]/20"
                >
                    <MessageSquare size={48} className="mx-auto" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t('support.cta_title')}</h2>
                    <p className="text-xl opacity-90 max-w-xl mx-auto font-medium">
                        {t('support.cta_desc')}
                    </p>
                    <Link to="/contact" className="bg-white text-[#0071e3] px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform inline-block">
                        {t('support.cta_button')}
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

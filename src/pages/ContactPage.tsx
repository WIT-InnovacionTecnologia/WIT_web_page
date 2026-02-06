import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, ShieldCheck, ArrowRight, LifeBuoy, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 selection:bg-[#0071e3]/20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={APPLE_TRANSITION}
                    className="space-y-6"
                >
                    <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none">
                        {t('contact.hero_title')}
                    </h1>
                    <p className="text-2xl md:text-3xl text-[#86868b] font-medium max-w-3xl mx-auto tracking-tight">
                        {t('contact.hero_subtitle')}
                    </p>
                </motion.div>
            </section>

            {/* Hub Sections */}
            <div className="max-w-7xl mx-auto px-4 py-20 divide-y divide-[#f5f5f7] dark:divide-[#1d1d1f]">
                {/* Support Hub */}
                <section className="py-24 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="space-y-8"
                    >
                        <div className="text-[#0071e3] p-4 bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-2xl w-fit">
                            <LifeBuoy size={40} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('contact.support_title')}</h2>
                        <p className="text-xl text-[#86868b] font-medium leading-relaxed">
                            {t('contact.support_desc')}
                        </p>
                        <Link to="/support" className="inline-flex items-center gap-2 text-[#0071e3] text-xl font-bold hover:underline group">
                            {t('contact.support_link')} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                    <div className="bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[3rem] p-12 aspect-video flex items-center justify-center">
                        <MessageCircle size={100} className="text-[#0071e3] opacity-20" />
                    </div>
                </section>

                {/* Sales Hub */}
                <section className="py-24 grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-black dark:bg-white rounded-[3rem] p-12 aspect-video flex items-center justify-center order-2 md:order-1">
                        <Briefcase size={100} className="text-white dark:text-black opacity-20" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="space-y-8 order-1 md:order-2"
                    >
                        <div className="text-[#0071e3] p-4 bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-2xl w-fit">
                            <Briefcase size={40} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('contact.sales_title')}</h2>
                        <p className="text-xl text-[#86868b] font-medium leading-relaxed">
                            {t('contact.sales_desc')}
                        </p>
                        <Link to="/sales" className="inline-flex items-center gap-2 text-[#0071e3] text-xl font-bold hover:underline group">
                            {t('contact.sales_link')} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </section>

                {/* Offices Hub */}
                <section className="py-24 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="space-y-8"
                    >
                        <div className="text-[#0071e3] p-4 bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-2xl w-fit">
                            <MapPin size={40} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('contact.offices_title')}</h2>
                        <p className="text-xl text-[#86868b] font-medium leading-relaxed">
                            {t('contact.offices_desc')}
                        </p>
                        <Link to="/offices" className="inline-flex items-center gap-2 text-[#0071e3] text-xl font-bold hover:underline group">
                            {t('contact.offices_link')} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                    <div className="bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[3rem] p-12 aspect-video flex items-center justify-center">
                        <MapPin size={100} className="text-[#0071e3] opacity-20" />
                    </div>
                </section>
            </div>

            {/* Direct Channels */}
            <section className="bg-[#f5f5f7] dark:bg-transparent py-32 mt-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white dark:bg-black p-12 rounded-[3.5rem] shadow-xl border border-[#d2d2d7] dark:border-[#424245] space-y-6">
                            <Phone className="text-[#0071e3] w-12 h-12" />
                            <h3 className="text-3xl font-bold tracking-tight">{t('contact.call_title')}</h3>
                            <p className="text-xl text-[#86868b] font-medium">{t('contact.call_desc')}</p>
                            <p className="text-2xl font-bold">+56 9 9848 1845</p>
                        </div>
                        <div className="bg-white dark:bg-black p-12 rounded-[3.5rem] shadow-xl border border-[#d2d2d7] dark:border-[#424245] space-y-6">
                            <ShieldCheck className="text-[#34c759] w-12 h-12" />
                            <h3 className="text-3xl font-bold tracking-tight">{t('contact.security_title')}</h3>
                            <p className="text-xl text-[#86868b] font-medium">{t('contact.security_desc')}</p>
                            <p className="text-2xl font-bold">security@wit.la</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

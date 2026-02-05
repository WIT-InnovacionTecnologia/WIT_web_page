import { motion } from 'framer-motion';
import { Send, Phone, ArrowRight, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const SalesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20 selection:bg-[#0071e3]/20">
            {/* Header */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={APPLE_TRANSITION}
                    className="max-w-3xl"
                >
                    <span className="text-[#0071e3] text-xl font-bold tracking-tight mb-4 block">{t('sales.tag')}</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                        {t('sales.title_1')} <br /> {t('sales.title_2_blue')}
                    </h1>
                    <p className="text-2xl text-[#86868b] font-medium leading-tight max-w-2xl">
                        {t('sales.subtitle')}
                    </p>
                </motion.div>
            </section>

            {/* Direct Contact Options */}
            <section className="max-w-7xl mx-auto px-4 py-20 border-t border-[#f5f5f7] dark:border-[#1d1d1f]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="bg-[#f5f5f7] dark:bg-[#1d1d1f] p-12 rounded-[3.5rem] flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <Building2 className="w-12 h-12 text-[#0071e3]" />
                            <h2 className="text-4xl font-bold tracking-tight">{t('sales.hablemos_title')}</h2>
                            <p className="text-xl text-[#86868b] font-medium leading-relaxed">
                                {t('sales.hablemos_desc')}
                            </p>
                        </div>
                        <div className="mt-12 space-y-4">
                            <div className="flex items-center gap-4 text-2xl font-bold">
                                <Phone className="w-6 h-6" />
                                +56 9 9848 1845
                            </div>
                            <div className="flex items-center gap-4 text-2xl font-bold text-[#0071e3] cursor-pointer group">
                                ventas@wit.la
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="bg-white dark:bg-black p-12 rounded-[3.5rem] border border-[#f5f5f7] dark:border-[#1d1d1f] shadow-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder={t('sales.form.name')} className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#0071e3]" />
                                <input type="text" placeholder={t('sales.form.lastname')} className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#0071e3]" />
                            </div>
                            <input type="email" placeholder={t('sales.form.email')} className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#0071e3]" />
                            <select className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#0071e3] text-gray-400">
                                <option>{t('sales.form.interest')}</option>
                                <option>{t('sales.form.options.sentinel')}</option>
                                <option>{t('sales.form.options.iot')}</option>
                                <option>{t('sales.form.options.smart_city')}</option>
                            </select>
                            <textarea rows={4} placeholder={t('sales.form.message')} className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#0071e3] resize-none"></textarea>
                            <button className="w-full bg-[#0071e3] text-white py-6 rounded-full font-bold text-xl hover:bg-[#0077ed] transition-all flex items-center justify-center gap-3">
                                <Send className="w-5 h-5" /> {t('sales.form.send')}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

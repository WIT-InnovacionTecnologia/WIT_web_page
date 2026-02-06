import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowLeft, Send, Sparkles } from 'lucide-react';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const DemoRequestPage = () => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const productName = searchParams.get('product') || 'Soluciones WIT';

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#f5f5f7] dark:bg-black flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={APPLE_TRANSITION}
                    className="max-w-md w-full bg-white dark:bg-black/40 backdrop-blur-3xl border border-transparent dark:border-white/5 shadow-xl transition-all duration-700"
                >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {t('demo_request.form.success_title')}
                        </h2>
                        <p className="text-[#86868b] font-medium leading-relaxed">
                            {t('demo_request.form.success_message', { product: productName })}
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-[#0071e3] text-white py-4 rounded-full font-semibold hover:bg-[#0077ed] transition-all"
                    >
                        {t('demo_request.form.back_home')}
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-transparent text-black dark:text-white pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#86868b] hover:text-[#0071e3] transition-colors mb-12 font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver
                </motion.button>

                <div className="grid md:grid-cols-1 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={APPLE_TRANSITION}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-[#0071e3] font-bold tracking-tight flex items-center gap-2">
                                <Sparkles className="w-5 h-5" /> Solicitar Demostración
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
                                {t('demo_request.title')} <br />
                                <span className="text-[#0071e3]">{productName}</span>.
                            </h1>
                            <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-tight max-w-xl">
                                {t('demo_request.subtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-[#f5f5f7] dark:bg-black/40 backdrop-blur-3xl border border-transparent dark:border-white/5 shadow-xl transition-all duration-700">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest px-4">{t('demo_request.form.first_name')}</label>
                                    <input required type="text" className="w-full bg-white dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0071e3] transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest px-4">{t('demo_request.form.last_name')}</label>
                                    <input required type="text" className="w-full bg-white dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0071e3] transition-all outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest px-4">{t('demo_request.form.email')}</label>
                                <input required type="email" className="w-full bg-white dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0071e3] transition-all outline-none" placeholder="ejemplo@empresa.com" />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest px-4">{t('demo_request.form.company')}</label>
                                    <input required type="text" className="w-full bg-white dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0071e3] transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest px-4">{t('demo_request.form.job_title')}</label>
                                    <input required type="text" className="w-full bg-white dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0071e3] transition-all outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest px-4">{t('demo_request.form.message')}</label>
                                <textarea className="w-full bg-white dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0071e3] transition-all outline-none min-h-[120px] resize-none" />
                            </div>

                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full bg-[#0071e3] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#0077ed] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        {t('demo_request.form.submit')}
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

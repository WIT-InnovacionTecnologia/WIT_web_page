import { motion } from 'framer-motion';
import { TrendingUp, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const KPIsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 selection:bg-[#0071e3]/20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={APPLE_TRANSITION}
                    className="space-y-8"
                >
                    <span className="text-[#0071e3] text-xl font-bold tracking-tight block">{t('bi.kpis.tag')}</span>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]">
                        {t('bi.kpis.title_1')} <br />
                        <span className="text-[#0071e3]">{t('bi.kpis.title_2_blue')}</span>
                    </h1>
                    <p className="text-2xl text-[#86868b] font-medium max-w-2xl mx-auto leading-tight">
                        {t('bi.kpis.subtitle')}
                    </p>
                </motion.div>
            </section>

            {/* Metrics Showcase */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="bg-[#f5f5f7] dark:bg-[#111111] p-16 rounded-[4rem] space-y-12 border border-transparent dark:border-white/5"
                    >
                        <div className="space-y-6">
                            <TrendingUp className="w-16 h-16 text-[#0071e3]" />
                            <h2 className="text-5xl font-bold tracking-tight leading-tight">Crecimiento Medible.</h2>
                            <p className="text-xl text-[#86868b] font-medium leading-relaxed">Analizamos tendencias históricas para proyectar el crecimiento futuro con precisión algorítmica.</p>
                        </div>
                        <ul className="space-y-4">
                            {['Proyección de Ingresos', 'Churn Rate Predictivo', 'LTV por Segmento'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-lg font-bold">
                                    <CheckCircle2 className="text-[#34c759] w-5 h-5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="bg-[#0071e3] p-16 rounded-[4rem] text-white space-y-12"
                    >
                        <div className="space-y-6 text-white">
                            <Activity className="w-16 h-16" />
                            <h2 className="text-5xl font-bold tracking-tight leading-tight">Eficiencia Operativa.</h2>
                            <p className="text-xl opacity-90 font-medium leading-relaxed">KPIs técnicos diseñados para plantas, flotas y centros logísticos en tiempo real.</p>
                        </div>
                        <div className="mt-auto">
                            <button className="bg-white text-[#0071e3] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                                Ver casos de estudio <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

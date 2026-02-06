import { motion } from 'framer-motion';
import { MousePointer2, Zap, BarChart3, Database } from 'lucide-react';

import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const DashboardsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 selection:bg-[#0071e3]/20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={APPLE_TRANSITION}
                    className="max-w-4xl"
                >
                    <span className="text-[#0071e3] text-xl font-bold tracking-tight mb-4 block">{t('bi.dashboards.tag')}</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                        {t('bi.dashboards.title_1')} <br />
                        <span className="text-[#0071e3]">{t('bi.dashboards.title_2_blue')}</span>
                    </h1>
                    <p className="text-2xl text-[#86868b] font-medium leading-tight max-w-2xl">
                        {t('bi.dashboards.subtitle')}
                    </p>
                </motion.div>
            </section>

            {/* Feature Bento */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={APPLE_TRANSITION}
                        className="col-span-1 md:col-span-2 bg-[#f5f5f7] dark:bg-[#111111] rounded-[3.5rem] p-12 overflow-hidden relative group border border-transparent dark:border-white/5"
                    >
                        <div className="relative z-10 max-w-md">
                            <MousePointer2 className="w-12 h-12 text-[#0071e3] mb-8" />
                            <h2 className="text-4xl font-bold mb-4">Interactividad total.</h2>
                            <p className="text-xl text-[#86868b] font-medium">Filtra, explora y profundiza en cada métrica con un solo clic. Una experiencia fluida y reactiva.</p>
                        </div>
                        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-[#0071e3]/10 to-transparent group-hover:from-[#0071e3]/20 transition-all duration-700" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={APPLE_TRANSITION}
                        className="bg-[#f5f5f7] dark:bg-[#111111] rounded-[3.5rem] p-12 border border-transparent dark:border-white/5"
                    >
                        <Zap className="w-10 h-10 text-[#0071e3] mb-8" />
                        <h2 className="text-3xl font-bold mb-4">Latencia cero.</h2>
                        <p className="text-lg text-[#86868b] font-medium">Sincronización instantánea con tus fuentes de datos para una visión sin retrasos.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={APPLE_TRANSITION}
                        className="bg-[#f5f5f7] dark:bg-[#111111] rounded-[3.5rem] p-12 border border-transparent dark:border-white/5"
                    >
                        <Database className="w-10 h-10 text-[#0071e3] mb-8" />
                        <h2 className="text-3xl font-bold mb-4">Multi-fuente.</h2>
                        <p className="text-lg text-[#86868b] font-medium">Conectamos tus ERPs, CRMs y sensores IoT en un solo punto de verdad.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={APPLE_TRANSITION}
                        className="col-span-1 md:col-span-2 bg-black dark:bg-white text-white dark:text-black rounded-[3.5rem] p-12 border border-transparent dark:border-white/5"
                    >
                        <BarChart3 className="w-12 h-12 text-[#0071e3] mb-8" />
                        <h2 className="text-4xl font-bold mb-4">Visualización Premium.</h2>
                        <p className="text-xl opacity-80 font-medium">Diseño limpio que prioriza la legibilidad y el impacto visual de tus KPIs.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

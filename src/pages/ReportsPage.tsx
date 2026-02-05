import { motion } from 'framer-motion';
import { Clock, Mail, Download, ShieldCheck } from 'lucide-react';

import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const ReportsPage = () => {
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
                    <span className="text-[#0071e3] text-xl font-bold tracking-tight mb-4 block">{t('bi.reports.tag')}</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                        {t('bi.reports.title_1')} <br />
                        <span className="text-[#0071e3]">{t('bi.reports.title_2_blue')}</span>
                    </h1>
                    <p className="text-2xl text-[#86868b] font-medium leading-tight max-w-2xl">
                        {t('bi.reports.subtitle')}
                    </p>
                </motion.div>
            </section>

            {/* Workflow Section */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <Clock />, title: "Programación Inteligente", desc: "Configura entregas diarias, semanales o mensuales según tu necesidad." },
                        { icon: <Mail />, title: "Distribución Directa", desc: "Envío multicanal por correo, Slack o Microsoft Teams automáticamente." },
                        { icon: <Download />, title: "Multi-formato", desc: "Exporta tus datos en PDF, Excel o CSV con un diseño impecable." }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            <div className="text-[#0071e3] w-12 h-12">{feature.icon}</div>
                            <h3 className="text-2xl font-bold leading-tight">{feature.title}</h3>
                            <p className="text-lg text-[#86868b] font-medium">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Comparison Section */}
            <section className="bg-[#f5f5f7] dark:bg-[#161617] py-32 mt-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Precisión absoluta.</h2>
                        <div className="bg-white dark:bg-black p-12 rounded-[3.5rem] shadow-xl text-left border border-gray-100 dark:border-gray-800">
                            <ShieldCheck className="text-[#34c759] w-16 h-16 mb-8" />
                            <p className="text-2xl text-[#86868b] font-medium leading-relaxed italic">
                                "La automatización de reportes nos ahorró 20 horas semanales de trabajo administrativo, eliminando errores de digitación y asegurando que la gerencia siempre tenga la data correcta a las 8:00 AM."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

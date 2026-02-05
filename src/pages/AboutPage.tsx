import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Target, Globe, Shield, Zap, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const timelineData = [
        { year: "2009", title: "El Comienzo", desc: "WIT nace con una visión: conectar lo que antes era invisible.", icon: <Zap className="w-8 h-8" /> },
        { year: "2014", title: "Expansión IoT", desc: "Desplegamos nuestra primera red masiva de sensores en la minería chilena.", icon: <Globe className="w-8 h-8" /> },
        { year: "2019", title: "Era de la IA", desc: "Integramos algoritmos de visión artificial para seguridad vial en tiempo real.", icon: <Target className="w-8 h-8" /> },
        { year: "2024", title: "Liderazgo Regional", desc: "Consolidamos operaciones en todo Chile con tecnología 100% propia.", icon: <Shield className="w-8 h-8" /> }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-[#0071e3]/20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={APPLE_TRANSITION}
                        className="space-y-4"
                    >
                        <span className="text-xl md:text-2xl font-semibold tracking-tight text-[#86868b]">Acerca de WIT</span>
                        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-12">
                            Tecnología con <br />
                            <span className="text-[#0071e3]">propósito humano.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Sections */}
            <section className="relative max-w-7xl mx-auto px-4 py-64">
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#f5f5f7] dark:bg-[#1d1d1f] hidden md:block" />

                <div className="space-y-[40vh] relative">
                    {timelineData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={APPLE_TRANSITION}
                            className={`flex flex-col md:flex-row items-center gap-24 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className="flex-1 text-center md:text-left space-y-6">
                                <motion.span
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ ...APPLE_TRANSITION, delay: 0.2 }}
                                    className="text-8xl md:text-[12rem] font-bold text-[#f5f5f7] dark:text-[#1d1d1f] leading-none select-none tracking-tighter"
                                >
                                    {item.year}
                                </motion.span>
                                <h3 className="text-4xl md:text-6xl font-bold tracking-tight">{item.title}</h3>
                                <p className="text-2xl text-[#86868b] leading-relaxed max-w-lg mx-auto md:mx-0 font-medium tracking-tight">
                                    {item.desc}
                                </p>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative z-10 w-32 h-32 bg-white dark:bg-[#1d1d1f] rounded-full border border-[#f5f5f7] dark:border-[#424245] flex items-center justify-center text-[#0071e3] shadow-sm cursor-pointer"
                            >
                                {item.icon}
                            </motion.div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Carbon Neutral Section */}
            <section className="bg-white dark:bg-black py-64 border-t border-[#f5f5f7] dark:border-[#1d1d1f]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-24 space-y-32">
                    <div className="grid lg:grid-cols-2 gap-32 items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="space-y-16"
                        >
                            <div className="flex items-center gap-4 text-[#34c759]">
                                <Leaf className="w-10 h-10" />
                                <span className="text-2xl font-bold tracking-tight">Compromiso WIT 2030</span>
                            </div>
                            <h2 className="text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-12">
                                Carbono <br />
                                <span className="text-[#34c759] italic">Neutral.</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="space-y-12"
                        >
                            <p className="text-3xl text-[#86868b] leading-tight font-medium tracking-tight">
                                Nuestro objetivo es que cada sensor, cada servidor y cada línea de código de WIT sea 100% carbono neutral para finales de la década.
                            </p>
                            <p className="text-xl text-[#86868b] leading-relaxed max-w-xl">
                                Estamos modernizando nuestra cadena de suministro y optimizando el consumo energético de nuestros dispositivos IoT para liderar la transformación sostenible de Chile.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "Consumo Reducido", value: "-15%", sub: "En flotas de buses", color: "text-[#34c759]" },
                            { label: "Emisiones", value: "-22k", sub: "Toneladas de CO2", color: "text-[#34c759]" },
                            { label: "Hardware", value: "Reciclable", sub: "98% de componentes", color: "text-[#34c759]" },
                            { label: "Energía", value: "Sostenible", sub: "En casa matriz", color: "text-[#34c759]" }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                                className="bg-[#f5f5f7] dark:bg-[#1d1d1f] p-12 rounded-[3.5rem] space-y-4 hover:shadow-xl transition-shadow cursor-default"
                            >
                                <span className={`text-5xl font-bold tracking-tighter block ${card.color}`}>{card.value}</span>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-[#86868b] lg:text-[#424245] uppercase tracking-widest leading-none">{card.label}</p>
                                    <p className="text-sm font-medium text-[#86868b]">{card.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-64 px-4 text-center bg-[#f5f5f7] dark:bg-[#161617]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={APPLE_TRANSITION}
                    className="max-w-5xl mx-auto space-y-16"
                >
                    <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9]">
                        Innovación que <br /> <span className="text-[#0071e3]">trasciende.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link to="/contact" className="bg-[#0071e3] text-white px-16 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform hover:bg-[#0077ed] shadow-lg shadow-[#0071e3]/20">
                            Contactar con Ventas
                        </Link>
                        <Link to="/careers" className="text-[#0071e3] font-bold text-2xl group flex items-center gap-2">
                            Ver carreras <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

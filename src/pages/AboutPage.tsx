import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Target, Globe, Shield, Zap, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const timelineData = [
        { year: "2009", title: "El Comienzo", desc: "WIT nace con una visión: conectar lo que antes era invisible.", icon: <Zap className="w-8 h-8" /> },
        { year: "2014", title: "Expansión IoT", desc: "Desplegamos nuestra primera red masiva de sensores en la minería chilena.", icon: <Globe className="w-8 h-8" /> },
        { year: "2019", title: "Era de la IA", desc: "Integramos algoritmos de visión artificial para seguridad vial en tiempo real.", icon: <Target className="w-8 h-8" /> },
        { year: "2024", title: "Liderazgo Regional", desc: "Consolidamos operaciones en todo Chile con tecnología 100% propia.", icon: <Shield className="w-8 h-8" /> }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <span className="text-xl md:text-2xl font-semibold tracking-tight">Acerca de WIT</span>
                        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-12">
                            Tecnología con <br />
                            <span className="text-blue-600">propósito humano.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Sections */}
            <section className="relative max-w-7xl mx-auto px-4 py-64">
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-100 dark:bg-zinc-800 hidden md:block" />

                <div className="space-y-96 relative">
                    {timelineData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className={`flex flex-col md:flex-row items-center gap-24 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className="flex-1 text-center md:text-left space-y-6">
                                <span className="text-8xl md:text-[12rem] font-bold text-zinc-50 dark:text-zinc-900 leading-none select-none tracking-tighter">{item.year}</span>
                                <h3 className="text-4xl md:text-6xl font-bold tracking-tight">{item.title}</h3>
                                <p className="text-2xl text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium tracking-tight">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="relative z-10 w-32 h-32 bg-white dark:bg-black rounded-full border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-blue-600 shadow-sm">
                                {item.icon}
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Carbon Neutral Section */}
            <section className="bg-white dark:bg-black py-64 border-t border-zinc-50 dark:border-zinc-900">
                <div className="max-w-[1440px] mx-auto px-4 md:px-24 space-y-32">
                    <div className="grid lg:grid-cols-2 gap-32 items-end">
                        <div className="space-y-16">
                            <div className="flex items-center gap-4 text-green-600">
                                <Leaf className="w-10 h-10" />
                                <span className="text-2xl font-bold tracking-tight">Compromiso WIT 2030</span>
                            </div>
                            <h2 className="text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-12">
                                Carbono <br />
                                <span className="text-green-600 italic">Neutral.</span>
                            </h2>
                        </div>
                        <div className="space-y-12">
                            <p className="text-3xl text-zinc-500 dark:text-zinc-500 leading-tight font-medium tracking-tight">
                                Nuestro objetivo es que cada sensor, cada servidor y cada línea de código de WIT sea 100% carbono neutral para finales de la década.
                            </p>
                            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                                Estamos modernizando nuestra cadena de suministro y optimizando el consumo energético de nuestros dispositivos IoT para liderar la transformación sostenible de Chile.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "Consumo Reducido", value: "-15%", sub: "En flotas de buses" },
                            { label: "Emisiones", value: "-22k", sub: "Toneladas de CO2" },
                            { label: "Hardware", value: "Reciclable", sub: "98% de componentes" },
                            { label: "Energía", value: "Sostenible", sub: "En casa matriz" }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-zinc-50 dark:bg-zinc-900/50 p-12 rounded-[3.5rem] space-y-4">
                                <span className="text-5xl font-bold tracking-tighter block">{card.value}</span>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-zinc-400 lg:text-zinc-500 uppercase tracking-widest leading-none">{card.label}</p>
                                    <p className="text-sm font-medium text-zinc-400">{card.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-64 px-4 text-center bg-zinc-50 dark:bg-zinc-900/20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto space-y-16"
                >
                    <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9]">
                        Innovación que <br /> <span className="text-blue-600">trasciende.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link to="/contact" className="bg-[#0071e3] text-white px-16 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform hover:bg-[#0077ed]">
                            Contactar con Ventas
                        </Link>
                        <Link to="/careers" className="text-[#0071e3] font-bold text-2xl hover:underline flex items-center gap-2">
                            Ver carreras <ArrowRight />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

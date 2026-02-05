import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Globe, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
            {/* Hero Section - The "Big Statement" */}
            <section className="relative h-[90dvh] flex items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-zinc-900/50 dark:to-black" />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-500 mb-6 tracking-tight"
                    >
                        WIT Innovación y Tecnología
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                        className="text-6xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.05]"
                    >
                        La tecnología que <br />
                        <span className="text-gray-400 dark:text-zinc-600">mueve al mundo.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        17 años transformando datos en decisiones. <br className="hidden md:block" />
                        Líderes en convergencia de IA e IoT en Latinoamérica.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent" />
                </motion.div>
            </section>

            {/* Content Sections - Apple "Story" Style */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 space-y-32 pb-32">

                {/* section: Who we are */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Diseñamos soluciones que parecen magia, pero son pura ingeniería.</h2>
                        <p className="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed">
                            En WIT, nos especializamos en cerrar la brecha entre lo físico y lo digital. Desarrollamos hardware robusto y software inteligente que se integran perfectamente para optimizar procesos críticos.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/team" className="text-blue-600 dark:text-blue-500 font-semibold flex items-center group">
                                Conoce al equipo <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay group-hover:opacity-50 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Zap className="w-32 h-32 text-blue-600/20 dark:text-blue-400/10" />
                        </div>
                    </motion.div>
                </section>

                {/* section: Mission & Vision (Interconnected Cards) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50 dark:bg-zinc-900/50 p-12 md:p-16 rounded-[3rem] space-y-6"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">Misión</span>
                        <h3 className="text-3xl font-bold">Empoderar a través de la innovación.</h3>
                        <p className="text-lg text-gray-500 dark:text-zinc-400 leading-relaxed">
                            Implementamos soluciones tecnológicas disruptivas que optimizan procesos operativos y fomentan una cultura basada en datos en tiempo real.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-black dark:bg-zinc-800 p-12 md:p-16 rounded-[3rem] text-white space-y-6"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">Visión</span>
                        <h3 className="text-3xl font-bold">Liderar el futuro del IoT e IA.</h3>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Ser el referente global que anticipa las necesidades del mercado, creando un futuro donde la tecnología y la sostenibilidad caminen juntas.
                        </p>
                    </motion.div>
                </section>

                {/* section: Values (Visual Grid) */}
                <section className="space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">Nuestros Valores Corazón</h2>
                        <p className="text-lg text-gray-500 dark:text-zinc-400 italic">Los principios que guían cada innovación en WIT.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Lightbulb />, label: "Innovación Constante", desc: "Desafiamos el statu quo para encontrar soluciones creativas." },
                            { icon: <Target />, label: "Excelencia Técnica", desc: "Pasión por la precisión en cada línea de código y dispositivo." },
                            { icon: <Users />, label: "Compromiso", desc: "El éxito de nuestros clientes es nuestro motor principal." },
                            { icon: <Shield />, label: "Integridad", desc: "Transparencia y ética en todas nuestras relaciones." },
                            { icon: <Globe />, label: "Sostenibilidad", desc: "Tecnología que promueve el uso eficiente de recursos." },
                            { icon: <Zap />, label: "Agilidad", desc: "Capacidad de respuesta rápida ante desafíos complejos." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                                <p className="text-gray-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* section: Presence */}
                <section className="bg-zinc-50 dark:bg-zinc-900/30 rounded-[3rem] p-12 md:p-24 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight italic">Chile y el Mundo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { city: "Santiago", type: "Casa Matriz" },
                            { city: "Iquique", type: "Centro Regional" },
                            { city: "Antofagasta", type: "Soporte Minería" }
                        ].map((loc, idx) => (
                            <div key={idx} className="space-y-2">
                                <h5 className="text-3xl font-bold text-blue-600 dark:text-blue-500 tracking-tighter">{loc.city}</h5>
                                <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{loc.type}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Bottom CTA Section */}
            <section className="bg-black py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        Escribamos el futuro <br /> de tu industria hoy.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                            Contactar con Ventas
                        </Link>
                        <Link to="/careers" className="bg-transparent border border-zinc-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-900 transition-colors">
                            Ver vacantes
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};


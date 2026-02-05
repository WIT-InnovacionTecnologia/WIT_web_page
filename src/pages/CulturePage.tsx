import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, Coffee, Globe, Shield } from 'lucide-react';

export const CulturePage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans pt-20">
            {/* Visual Hero */}
            <section className="relative h-[80dvh] flex items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 bg-blue-50 dark:bg-zinc-900 opacity-30" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
                    >
                        Vivir la <br />
                        <span className="text-blue-600 italic">Innovación.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Nuestra cultura es el sistema operativo que impulsa nuestras innovaciones. Creemos en la libertad, el impacto y la búsqueda incansable de la excelencia.
                    </motion.p>
                </div>
            </section>

            {/* Core Values Section */}
            <div className="max-w-7xl mx-auto px-4 py-32 space-y-48">

                {/* section: Freedom and Responsibility */}
                <section className="grid md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                            <Sparkles />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Cultura de impacto, <br />no de esfuerzo.</h2>
                        <p className="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed">
                            No medimos el éxito por las horas sentado en un escritorio, sino por el impacto real que nuestras soluciones generan en las ciudades y empresas que servimos.
                        </p>
                    </div>
                    <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] p-12 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                        <Zap className="w-32 h-32 text-purple-600/10" />
                    </div>
                </section>

                {/* section: Community & Hybrid life */}
                <section className="grid md:grid-cols-2 gap-24 items-center md:flex-row-reverse border-t border-gray-100 dark:border-zinc-800 pt-32">
                    <div className="md:order-2 space-y-8 text-right md:text-left	">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center mb-6 md:mr-auto md:ml-0 ml-auto mr-0">
                            <Globe />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Híbridos desde <br />el origen.</h2>
                        <p className="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed">
                            Entendemos que el talento está en todas partes. Nuestras oficinas en Santiago, Iquique y Antofagasta son centros de colaboración, pero el mundo es nuestro lugar de trabajo.
                        </p>
                    </div>
                    <div className="md:order-1 aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] p-12 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                        <div className="text-center">
                            <h4 className="text-5xl font-bold text-blue-600 mb-2">100%</h4>
                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Enfoque Digital</p>
                        </div>
                    </div>
                </section>

                {/* section: Small details */}
                <section className="space-y-16">
                    <h2 className="text-4xl font-bold text-center">Pequeños detalles, <br /> gran diferencia.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Coffee />, label: "Flexibilidad Total", desc: "Tú gestionas tu tiempo. Confiamos en tu profesionalismo." },
                            { icon: <Heart />, label: "Bienestar WIT", desc: "Seguros de salud, días de descanso adicionales y soporte emocional." },
                            { icon: <Shield />, label: "Seguridad y Ética", desc: "Ambiente inclusivo y respetuoso con protocolos claros de convivencia." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-[2.5rem] bg-gray-50 dark:bg-zinc-900 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 transition-all"
                            >
                                <div className="text-blue-600 mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{item.label}</h3>
                                <p className="text-gray-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Closing statement */}
            <section className="bg-blue-600 py-32 px-4 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight">No solo hacemos software. <br /> Creamos equipo.</h2>
                    <div className="pt-8">
                        <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                            Ver nuestras vacantes
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

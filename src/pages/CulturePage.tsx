import { motion } from 'framer-motion';
import { Sparkles, Globe, Heart, Zap } from 'lucide-react';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] };

export const CulturePage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-[#0071e3]/20 overflow-x-hidden">
            {/* Typographic Hero */}
            <section className="pt-48 pb-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={APPLE_TRANSITION}
                        className="space-y-4 mb-24"
                    >
                        <span className="text-[#0071e3] font-bold tracking-[0.2em] uppercase text-sm">Cultura en WIT</span>
                        <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12">
                            Mentes. <br />
                            Juntas. <br />
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="text-[#f5f5f7] dark:text-[#1d1d1f]"
                            >
                                Infinitas.
                            </motion.span>
                        </h1>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                        >
                            La inclusión empodera nuestra innovación radical.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: 0.1 }}
                            className="text-xl md:text-2xl text-[#86868b] leading-relaxed font-medium"
                        >
                            En WIT, entendemos que los desafíos globales que enfrentamos hoy no se resuelven con pensamientos uniformes. Nuestra fuerza reside en la diversidad de nuestras perspectivas, orígenes y experiencias.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Growth Stat Section */}
            <section className="bg-[#f5f5f7] dark:bg-[#161617] py-48">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24 space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="text-5xl md:text-7xl font-bold tracking-tight"
                        >
                            Datos que <br /> <span className="italic font-serif text-[#0071e3]">inspiran.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: 0.1 }}
                            className="text-xl text-[#86868b]"
                        >
                            Nuestro compromiso con la transparencia y el crecimiento.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Mujeres en Tech", value: "38%", sub: "+12% vs 2023", color: "text-[#af52de]" },
                            { label: "Remoto / Híbrido", value: "100%", sub: "Libertad total", color: "text-[#0071e3]" },
                            { label: "Diversidad Regional", value: "15+", sub: "Comunas en Chile", color: "text-[#34c759]" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-[#1d1d1f] p-12 rounded-[3.5rem] border border-[#f5f5f7] dark:border-[#424245] flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-2xl transition-all duration-700 ease-out"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest text-[#86868b]">{stat.label}</span>
                                <span className={`text-7xl font-black tracking-tighter ${stat.color}`}>{stat.value}</span>
                                <span className="text-lg font-medium text-[#86868b] italic">{stat.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Blocks */}
            <section className="py-48 max-w-7xl mx-auto px-4 space-y-48">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4 text-[#ff9500]">
                            <Sparkles className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">Innovación sin Barreras</span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Creadores, <br /> no solo <br /> usuarios.
                        </h3>
                        <p className="text-xl text-[#86868b] leading-relaxed font-medium">
                            En WIT, cada miembro del equipo tiene la libertad de proponer innovaciones radicales. No seguimos jerarquías obsoletas; seguimos la mejor idea, venga de donde venga.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="aspect-[4/5] bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[4rem] overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9500]/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Zap className="w-64 h-64 group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-24 items-center md:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="md:order-2 space-y-12"
                    >
                        <div className="flex items-center gap-4 text-[#0071e3]">
                            <Heart className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">Bienestar Humano</span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Vida, <br /> por sobre <br /> el trabajo.
                        </h3>
                        <p className="text-xl text-[#86868b] leading-relaxed font-medium">
                            Entendemos que la excelencia nace del descanso y el equilibrio. WIT se adapta a tu vida, no al revés. Fomentamos la salud mental y el tiempo de calidad fuera de las pantallas.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="md:order-1 aspect-[4/5] bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[4rem] overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3]/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Globe className="w-64 h-64 group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-64 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={APPLE_TRANSITION}
                    className="max-w-5xl mx-auto space-y-12"
                >
                    <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12">
                        Somos <br /> WIT.
                    </h2>
                    <p className="text-2xl md:text-3xl text-[#86868b] font-medium leading-relaxed max-w-2xl mx-auto">
                        Únete a nosotros para construir algo que <br className="hidden md:block" /> trascienda el código y las máquinas.
                    </p>
                    <div className="pt-12">
                        <button className="bg-[#0071e3] text-white px-16 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-[#0071e3]/20">
                            Ser parte del equipo
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

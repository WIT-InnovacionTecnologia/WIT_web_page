import { motion } from 'framer-motion';
import { Sparkles, Globe, Heart, Zap } from 'lucide-react';

export const CulturePage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
            {/* Typographic Hero */}
            <section className="pt-48 pb-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4 mb-24"
                    >
                        <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Cultura en WIT</span>
                        <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12">
                            Mentes. <br />
                            Juntas. <br />
                            <span className="text-gray-200 dark:text-zinc-900">Infinitas.</span>
                        </h1>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                        >
                            La inclusión empodera nuestra innovación radical.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-gray-500 dark:text-zinc-500 leading-relaxed font-medium"
                        >
                            En WIT, entendemos que los desafíos globales que enfrentamos hoy no se resuelven con pensamientos uniformes. Nuestra fuerza reside en la diversidad de nuestras perspectivas, orígenes y experiencias.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Growth Stat Section */}
            <section className="bg-zinc-50 dark:bg-zinc-900/30 py-48">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Datos que <br /> <span className="italic font-serif text-blue-600">inspiran.</span></h2>
                        <p className="text-xl text-zinc-400">Nuestro compromiso con la transparencia y el crecimiento.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Mujeres en Tech", value: "38%", sub: "+12% vs 2023", color: "text-purple-600" },
                            { label: "Remoto / Híbrido", value: "100%", sub: "Libertad total", color: "text-blue-600" },
                            { label: "Diversidad Regional", value: "15+", sub: "Comunas en Chile", color: "text-green-600" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-black p-12 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-900 flex flex-col items-center text-center space-y-4 hover:shadow-2xl transition-all duration-500"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">{stat.label}</span>
                                <span className={`text-7xl font-black tracking-tighter ${stat.color}`}>{stat.value}</span>
                                <span className="text-lg font-medium text-zinc-500 italic">{stat.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Blocks */}
            <section className="py-48 max-w-7xl mx-auto px-4 space-y-48">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 text-orange-600">
                            <Sparkles className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">Innovación sin Barreras</span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Creadores, <br /> no solo <br /> usuarios.
                        </h3>
                        <p className="text-xl text-gray-500 dark:text-zinc-500 leading-relaxed font-medium">
                            En WIT, cada miembro del equipo tiene la libertad de proponer innovaciones radicales. No seguimos jerarquías obsoletas; seguimos la mejor idea, venga de donde venga.
                        </p>
                    </div>
                    <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[4rem] overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Zap className="w-64 h-64" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-24 items-center md:flex-row-reverse">
                    <div className="md:order-2 space-y-12">
                        <div className="flex items-center gap-4 text-blue-600">
                            <Heart className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">Bienestar Humano</span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Vida, <br /> por sobre <br /> el trabajo.
                        </h3>
                        <p className="text-xl text-gray-500 dark:text-zinc-500 leading-relaxed font-medium">
                            Entendemos que la excelencia nace del descanso y el equilibrio. WIT se adapta a tu vida, no al revés. Fomentamos la salud mental y el tiempo de calidad fuera de las pantallas.
                        </p>
                    </div>
                    <div className="md:order-1 aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[4rem] overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Globe className="w-64 h-64" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-64 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto space-y-12"
                >
                    <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12">
                        Somos <br /> WIT.
                    </h2>
                    <p className="text-2xl md:text-3xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        Únete a nosotros para construir algo que <br className="hidden md:block" /> trascienda el código y las máquinas.
                    </p>
                    <div className="pt-12">
                        <button className="bg-blue-600 text-white px-16 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-blue-600/20">
                            Ser parte del equipo
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

import { motion } from 'framer-motion';
import { Search, ArrowRight, Code, Database, Settings, Layout, Cpu, Users } from 'lucide-react';

export const CareersPage = () => {
    const teams = [
        { title: "Ingeniería de Software", icon: <Code />, color: "bg-blue-500" },
        { title: "Hardware e IoT", icon: <Cpu />, color: "bg-orange-500" },
        { title: "IA y Data Science", icon: <Database />, color: "bg-purple-500" },
        { title: "Operaciones", icon: <Settings />, color: "bg-zinc-700" },
        { title: "Diseño de Producto", icon: <Layout />, color: "bg-pink-500" },
        { title: "Crecimiento y Ventas", icon: <Users />, color: "bg-green-600" }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
            {/* Immersive Header */}
            <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent dark:from-zinc-900/20" />
                <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.8]"
                    >
                        Haz historia <br /> <span className="text-blue-600">trabajando en WIT.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-3xl text-gray-500 dark:text-zinc-500 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        No solo buscamos empleados. Buscamos creadores, visionarios y pensadores que quieran redefinir lo posible.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="pt-8"
                    >
                        <button className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-4 mx-auto group">
                            <Search className="w-6 h-6" /> Buscar vacantes
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-48 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Trabajar en WIT</span>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
                            Expertos liderando expertos.
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-510 leading-relaxed font-medium">
                            En WIT, nos organizamos por especialidades funcionales, no por unidades de negocio. Los expertos en hardware lideran hardware. Los expertos en IA lideran IA. Esta estructura garantiza que la excelencia técnica sea el centro de cada decisión.
                        </p>
                    </div>
                    <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-[4rem] p-12 flex items-center justify-center relative group border border-zinc-100 dark:border-zinc-900 shadow-2xl">
                        <div className="text-center space-y-6">
                            <div className="w-32 h-32 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                <Code className="w-16 h-16" />
                            </div>
                            <h4 className="text-3xl font-bold italic font-serif">"La ingeniería es nuestro lenguaje natal."</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teams Grid */}
            <section className="bg-zinc-50 dark:bg-zinc-900/40 py-48">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-24 space-y-4">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Encuentra <br /> <span className="text-blue-600 italic">tu lugar.</span></h2>
                        <p className="text-xl text-zinc-400 max-w-xl">Hay un espacio para cada pasión en WIT. Elige tu camino.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teams.map((team, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative aspect-square bg-white dark:bg-black rounded-[3.5rem] p-12 flex flex-col justify-between border border-zinc-100 dark:border-zinc-900 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className={`w-16 h-16 ${team.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                    {team.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold leading-tight">{team.title}</h3>
                                    <span className="text-blue-600 dark:text-blue-500 font-bold flex items-center text-sm">
                                        Explorar área <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life at WIT Benefit Grid */}
            <section className="py-48 max-w-[1440px] mx-auto px-4 md:px-24">
                <div className="text-center max-w-4xl mx-auto space-y-12 pb-32">
                    <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Vida en WIT</span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                        Tu mejor trabajo. <br /> Tu mejor tú.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-500 font-medium">
                        Damos prioridad a las personas. Con beneficios diseñados para apoyar tu crecimiento profesional y personal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Libertad de Ubicación", desc: "Trabaja desde donde te sientes más inspirado. 100% remoto o híbrido." },
                        { title: "Seguros de Salud Pro", desc: "Cobertura completa para ti y tu familia, incluyendo salud dental y mental." },
                        { title: "Wit-learning", desc: "Presupuesto anual para cursos, certificaciones y libros de tu elección." },
                        { title: "Paternidad / Maternidad", desc: "Permisos extendidos y flexibilidad total para disfrutar de tu familia." },
                        { title: "Hardware de Punta", desc: "Recibe el equipo que necesitas para volar en tu trabajo (Mac / Linux)." },
                        { title: "Wit-Days", desc: "Días de descanso adicionales para desconexión total cada trimestre." }
                    ].map((benefit, idx) => (
                        <div key={idx} className="p-12 bg-white dark:bg-zinc-950 rounded-[3rem] border border-zinc-50 dark:border-zinc-900 transition-all">
                            <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                            <p className="text-lg text-gray-500 dark:text-zinc-500 leading-relaxed font-medium">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-blue-600 py-48 text-center text-white px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-12">
                        Ven a <br /> crear.
                    </h2>
                    <p className="text-2xl md:text-3xl opacity-80 font-medium">Tu próximo gran desafío te espera en WIT.</p>
                    <div className="pt-12">
                        <button className="bg-white text-blue-600 px-20 py-6 rounded-full font-bold text-2xl hover:scale-110 transition-transform shadow-2xl">
                            Aplicar Ahora
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

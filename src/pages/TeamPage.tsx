import { motion } from 'framer-motion';
import { Globe, UserCircle } from 'lucide-react';

export const TeamPage = () => {
    const teamCategories = [
        {
            title: "Liderazgo Estratégico",
            description: "Visionarios que guían el rumbo de la innovación en WIT.",
            members: [
                { name: "Luis Tapia", role: "CEO & Founder", desc: "Liderando la visión tecnológica de WIT por más de 17 años." },
                { name: "Equipo Directivo", role: "Estrategia Global", desc: "Expertos en expansión y alianzas internacionales." }
            ]
        },
        {
            title: "Ingeniería e Innovación",
            description: "El motor técnico detrás de nuestras soluciones de IA e IoT.",
            members: [
                { name: "Arquitectos de Software", role: "Fullstack & IA", desc: "Especializados en algoritmos de aprendizaje profundo." },
                { name: "Ingenieros de Hardware", role: "IoT & Sensores", desc: "Diseñando dispositivos robustos para entornos críticos." }
            ]
        },
        {
            title: "Operaciones y Logística",
            description: "Garantizando que cada solución funcione perfectamente en terreno.",
            members: [
                { name: "Soporte 24/7", role: "Continuidad Operativa", desc: "Atención inmediata para clientes en todo Chile." },
                { name: "Implementación", role: "Instalación y Configuración", desc: "Expertos en despliegue de infraestructuras inteligentes." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans pt-20">
            {/* Immersive Header */}
            <section className="py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-semibold tracking-tight block"
                    >
                        El Talento Detrás de WIT
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight"
                    >
                        Mentes brillantes creando <br />
                        <span className="text-gray-400">el futuro hoy.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Somos un equipo multidisciplinario apasionado por resolver los desafíos más complejos mediante código, hardware y creatividad.
                    </motion.p>
                </div>
            </section>

            {/* Team Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-32 space-y-32">
                {teamCategories.map((cat, idx) => (
                    <section key={idx} className="space-y-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 dark:border-zinc-800 pb-8">
                            <div className="max-w-xl space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold">{cat.title}</h2>
                                <p className="text-lg text-gray-500 dark:text-zinc-400">{cat.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cat.members.map((member, mIdx) => (
                                <motion.div
                                    key={mIdx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-[2.5rem] bg-gray-50 dark:bg-zinc-900 flex flex-col sm:flex-row items-center sm:items-start gap-8 group hover:bg-white dark:hover:bg-zinc-800 transition-all duration-500 border border-transparent hover:border-gray-200 dark:hover:border-zinc-700 hover:shadow-2xl"
                                >
                                    <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <UserCircle className="w-16 h-16 opacity-50" />
                                    </div>
                                    <div className="text-center sm:text-left space-y-2">
                                        <h3 className="text-2xl font-bold">{member.name}</h3>
                                        <p className="text-blue-600 font-semibold">{member.role}</p>
                                        <p className="text-gray-500 dark:text-zinc-400 leading-relaxed">{member.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Diversity/Culture Teaser */}
            <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24 px-4 overflow-hidden">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Inclusión, Diversidad e Innovación.</h2>
                        <p className="text-lg text-gray-500 dark:text-zinc-400 leading-relaxed">
                            En WIT, entendemos que las mejores ideas nacen de la diversidad de perspectivas. Fomentamos un entorno donde el talento no tiene fronteras.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-blue-600">100+</span>
                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Colaboradores</span>
                            </div>
                            <div className="h-10 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-blue-600">15+</span>
                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Nacionalidades</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-white dark:bg-black rounded-3xl shadow-2xl flex items-center justify-center border border-zinc-100 dark:border-zinc-800">
                            <Globe className="w-24 h-24 text-blue-600/10" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

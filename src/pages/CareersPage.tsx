import { motion } from 'framer-motion';
import { GraduationCap, Code, Settings, ArrowRight } from 'lucide-react';

export const CareersPage = () => {
    const openings = [
        {
            category: "Desarrollo",
            roles: [
                { title: "Senior Fullstack Engineer", location: "Remoto / Santiago", type: "Full-time" },
                { title: "AI Specialist (Computer Vision)", location: "Remoto", type: "Full-time" }
            ]
        },
        {
            category: "Datos e Infra",
            roles: [
                { title: "Data Engineer", location: "Santiago", type: "Full-time" },
                { title: "SRE / DevOps Lead", location: "Remoto / Iquique", type: "Full-time" }
            ]
        },
        {
            category: "Operaciones",
            roles: [
                { title: "Especialista en Telemetría", location: "Antofagasta", type: "Full-time" },
                { title: "Support Specialist 24/7", location: "Santiago / Antofagasta", type: "Full-time" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans pt-20">
            {/* Minimalist Hero */}
            <section className="py-32 px-4">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight"
                    >
                        Haz tu mejor <br /> trabajo aquí.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Únete a un equipo que está redefiniendo cómo funcionan las ciudades y las empresas a través de la tecnología WIT.
                    </motion.p>
                </div>
            </section>

            {/* Benefits Bento-ish Layout */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-12 flex flex-col justify-end min-h-[400px] border border-gray-100 dark:border-zinc-800">
                        <GraduationCap className="w-12 h-12 text-blue-600 mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Crecimiento sin límites.</h2>
                        <p className="text-lg text-gray-500 dark:text-zinc-400">Acceso a certificaciones, mentorías y presupuesto anual para tu formación continua en las últimas tecnologías.</p>
                    </div>
                    <div className="bg-black dark:bg-zinc-800 text-white rounded-[3rem] p-12 flex flex-col justify-end min-h-[400px]">
                        <Code className="w-12 h-12 text-blue-400 mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Stack Moderno.</h2>
                        <p className="text-lg text-zinc-400">Trabaja con Rust, Go, Python (IA), React y las infraestructuras de nube más avanzadas.</p>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-12 flex flex-col justify-end min-h-[400px] border border-gray-100 dark:border-zinc-800">
                        <Settings className="w-12 h-12 text-blue-600 mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Impacto Real.</h2>
                        <p className="text-lg text-gray-500 dark:text-zinc-400">Tú código salvará vidas, evitará accidentes y optimizará el transporte de millones de personas.</p>
                    </div>
                    <div className="md:col-span-2 bg-blue-600 text-white rounded-[3rem] p-12 flex items-center justify-between group cursor-pointer overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">¿No ves tu rol?</h2>
                            <p className="text-lg opacity-80">Si eres brillante en lo que haces, queremos conocerte de todas formas. Envíanos tu perfil.</p>
                        </div>
                        <ArrowRight className="w-12 h-12 group-hover:translate-x-4 transition-transform hidden md:block" />
                    </div>
                </div>
            </section>

            {/* Job Openings List */}
            <section className="max-w-4xl mx-auto px-4 py-32 space-y-24">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold">Posiciones Abiertas</h2>
                    <p className="text-gray-500">Filtrar por área o ubicación.</p>
                </div>

                <div className="space-y-16">
                    {openings.map((cat, idx) => (
                        <div key={idx} className="space-y-6">
                            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] border-b border-gray-100 dark:border-zinc-800 pb-4">{cat.category}</h4>
                            <div className="divide-y divide-gray-50 dark:divide-zinc-900">
                                {cat.roles.map((role, rIdx) => (
                                    <motion.div
                                        key={rIdx}
                                        whileHover={{ x: 10 }}
                                        className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                                    >
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{role.title}</h3>
                                            <p className="text-gray-500 dark:text-zinc-400">{role.location} · {role.type}</p>
                                        </div>
                                        <div className="text-blue-600 dark:text-blue-500 font-bold flex items-center">
                                            Postular <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Application Process */}
            <section className="bg-gray-50 dark:bg-zinc-900/50 py-32 px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold italic">Nuestro Proceso</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        {[
                            { step: "01", label: "Aplicar", desc: "Envía tu CV / Portfolio" },
                            { step: "02", label: "Intro", desc: "Charla cultural" },
                            { step: "03", label: "Tech", desc: "Desafío técnico" },
                            { step: "04", label: "Oferta", desc: "Bienvenido a WIT" }
                        ].map((s, idx) => (
                            <div key={idx} className="space-y-2">
                                <span className="text-blue-600 text-4xl font-bold opacity-20">{s.step}</span>
                                <h5 className="font-bold text-xl">{s.label}</h5>
                                <p className="text-sm text-zinc-500">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

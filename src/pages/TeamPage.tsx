import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { UserCircle, X, Linkedin, Mail } from 'lucide-react';

export const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState<any>(null);

    const leadership = [
        {
            id: 1,
            name: "Luis Tapia",
            role: "CEO & Founder",
            quote: "La tecnología solo tiene sentido cuando resuelve problemas reales.",
            bio: "Líder visionario con más de 17 años de experiencia en el sector tecnológico chileno. Luis ha guiado a WIT desde sus inicios, transformándola en un referente regional en IoT e Inteligencia Artificial.",
            image: null
        },
        {
            id: 2,
            name: "Equipo Directivo",
            role: "Estrategia Global",
            quote: "Expandimos horizontes para que la innovación chilena llegue a todo el mundo.",
            bio: "Nuestra mesa directiva combina décadas de experiencia en gestión corporativa y desarrollo tecnológico, asegurando que WIT mantenga su estándar de excelencia en cada mercado.",
            image: null
        },
        {
            id: 3,
            name: "Head of Engineering",
            role: "Innovación Técnica",
            quote: "Código limpio, hardware robusto, soluciones inteligentes.",
            bio: "Liderando a los desarrolladores e ingenieros que construyen el núcleo de WIT. Nuestra ingeniería es reconocida por su estabilidad y capacidad de escalabilidad masiva.",
            image: null
        },
        {
            id: 4,
            name: "Head of Operations",
            role: "Excelencia en Terreno",
            quote: "La implementación perfecta es nuestro estándar diario.",
            bio: "Garantizando que el hardware de WIT funcione en los ambientes más extremos del planeta, desde el desierto de Atacama hasta los centros logísticos más complejos.",
            image: null
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
            {/* Minimalist Header */}
            <section className="pt-48 pb-24 px-4 text-center max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-8xl font-bold tracking-tight mb-8"
                >
                    Liderazgo en WIT
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-gray-500 dark:text-zinc-500 max-w-3xl mx-auto leading-relaxed"
                >
                    Nuestros líderes comparten una visión común: crear un futuro donde la tecnología y la humanidad se potencien mutuamente.
                </motion.p>
            </section>

            {/* Apple Leadership Grid Style */}
            <section className="max-w-7xl mx-auto px-4 pb-48">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {leadership.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="aspect-[3/4] bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden mb-6 relative group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-200 dark:text-zinc-800">
                                    <UserCircle className="w-48 h-48 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-1">{member.name}</h3>
                            <p className="text-zinc-500 dark:text-zinc-500 font-medium mb-4">{member.role}</p>
                            <span className="text-blue-600 dark:text-blue-500 font-semibold inline-flex items-center text-sm">
                                Ver Perfil
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Profile Modal - Apple Style Expansion */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white/80 dark:bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-white dark:bg-zinc-950 w-full max-w-6xl max-h-[90dvh] rounded-[3rem] overflow-y-auto relative shadow-2xl border border-zinc-100 dark:border-zinc-900"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-8 right-8 p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full hover:scale-110 transition-transform z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-16 p-8 md:p-24 items-center">
                                <div className="aspect-[3/4] bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] flex items-center justify-center">
                                    <UserCircle className="w-64 h-64 text-zinc-200 dark:text-zinc-800 opacity-20" />
                                </div>
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">{selectedMember.name}</h2>
                                        <p className="text-2xl text-blue-600 dark:text-blue-500 font-semibold">{selectedMember.role}</p>
                                    </div>

                                    <p className="text-3xl md:text-4xl font-serif italic text-zinc-400 dark:text-zinc-600 leading-tight">
                                        "{selectedMember.quote}"
                                    </p>

                                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                                        {selectedMember.bio}
                                    </p>

                                    <div className="flex gap-6 pt-4">
                                        <button className="flex items-center gap-3 text-lg font-bold hover:text-blue-600 transition-colors">
                                            <Linkedin className="w-6 h-6" /> LinkedIn
                                        </button>
                                        <button className="flex items-center gap-3 text-lg font-bold hover:text-blue-600 transition-colors">
                                            <Mail className="w-6 h-6" /> Email
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

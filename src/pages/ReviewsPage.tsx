import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, Check, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

interface Review {
    id: number;
    author: string;
    date: string;
    rating: number;
    title: string;
    content: string;
    helpful: number;
    verified: boolean;
    company?: string;
}

const mockReviews: Review[] = [
    {
        id: 1,
        author: "Gerencia de Operaciones",
        date: "15 de enero, 2026",
        rating: 5,
        title: "Optimización Crítica de Flujo",
        content: "La implementación de los sistemas de monitoreo en tiempo real de WIT ha sido fundamental para Metro. Logramos optimizar el flujo de pasajeros y reducir los tiempos de espera en horas punta de manera significativa.",
        helpful: 45,
        verified: true,
        company: "Metro de Santiago"
    },
    {
        id: 2,
        author: "Dirección de Innovación",
        date: "10 de enero, 2026",
        rating: 5,
        title: "Seguridad y Eficiencia en Ruta",
        content: "Gracias a los sensores IoT de WIT en nuestra flota, hemos implementado una estrategia de mantenimiento predictivo que ha mejorado la seguridad en ruta y reducido fallas críticas en un 35%.",
        helpful: 38,
        verified: true,
        company: "Pullman Bus"
    },
    {
        id: 3,
        author: "Gerencia Comercial",
        date: "5 de enero, 2026",
        rating: 5,
        title: "Insights Valiosos de Clientes",
        content: "La plataforma de análisis de datos de WIT nos ha permitido entender el comportamiento de nuestros visitantes como nunca antes, personalizando la experiencia de compra en Parque Arauco.",
        helpful: 29,
        verified: true,
        company: "Parque Arauco"
    },
    {
        id: 4,
        author: "Departamento de Tecnología",
        date: "28 de diciembre, 2025",
        rating: 5,
        title: "Excelencia en Conectividad 5G",
        content: "WIT ha sido un aliado estratégico en el despliegue de nuestra infraestructura 5G. Sus soluciones de conectividad para empresas son robustas, estables y de alto rendimiento.",
        helpful: 22,
        verified: true,
        company: "Claro Empresas"
    },
    {
        id: 5,
        author: "Centro de Control de Flota",
        date: "20 de diciembre, 2025",
        rating: 5,
        title: "Control Total de Flota",
        content: "El sistema de GPS avanzado de WIT ha transformado la gestión de Red Movilidad. La optimización de rutas y el seguimiento en tiempo real son ahora procesos fluidos y precisos.",
        helpful: 41,
        verified: true,
        company: "Red Movilidad"
    },
    {
        id: 6,
        author: "Operaciones Portuarias",
        date: "12 de diciembre, 2025",
        rating: 5,
        title: "Transformación Digital Impecable",
        content: "La consultoría y despliegue tecnológico en nuestras terminales portuarias fue impecable. WIT entiende los desafíos logísticos y entrega soluciones que realmente impactan el negocio.",
        helpful: 15,
        verified: true,
        company: "Terminales del Pacífico"
    }
];

export const ReviewsPage = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState<number | 'all'>('all');

    const filteredReviews = filter === 'all'
        ? mockReviews
        : mockReviews.filter(r => r.rating === filter);

    const averageRating = (mockReviews.reduce((acc, r) => acc + r.rating, 0) / mockReviews.length).toFixed(1);
    const totalReviews = mockReviews.length;

    const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
        stars: rating,
        count: mockReviews.filter(r => r.rating === rating).length,
        percentage: (mockReviews.filter(r => r.rating === rating).length / totalReviews) * 100
    }));

    const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
        const sizeClasses = {
            sm: 'w-3 h-3',
            md: 'w-4 h-4',
            lg: 'w-6 h-6'
        };

        return (
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`${sizeClasses[size]} ${star <= rating
                            ? 'fill-[#0071e3] text-[#0071e3]'
                            : 'fill-gray-200 text-gray-200 dark:fill-[#2d2d2f] dark:text-[#2d2d2f]'
                            }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 font-sans selection:bg-[#0071e3]/20">
            {/* Hero Section */}
            <section className="px-4 py-24 text-center">
                <div className="max-w-5xl mx-auto space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={APPLE_TRANSITION}
                        className="text-[#86868b] text-xl font-semibold tracking-tight block"
                    >
                        Testimonios Reales
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...APPLE_TRANSITION, delay: 0.1 }}
                        className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.9]"
                    >
                        Reseñas de <br /> <span className="text-[#0071e3]">clientes.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...APPLE_TRANSITION, delay: 0.2 }}
                        className="text-2xl text-[#86868b] font-medium max-w-3xl mx-auto tracking-tight"
                    >
                        Nuestra tecnología impulsa el éxito de las empresas líderes en el Cono Sur.
                    </motion.p>
                </div>
            </section>

            {/* Rating Summary Section */}
            <section className="max-w-7xl mx-auto px-4 py-20 border-t border-[#f5f5f7] dark:border-[#1d1d1f]">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-[10rem] font-bold tracking-tighter leading-none">{averageRating}</span>
                            <div className="space-y-4">
                                {renderStars(5, 'lg')}
                                <p className="text-xl text-[#86868b] font-bold uppercase tracking-widest">
                                    Puntaje General
                                </p>
                            </div>
                        </div>
                        <p className="text-2xl text-[#86868b] font-semibold leading-tight max-w-md">
                            98% de nuestros socios estratégicos califican nuestros servicios como de alta fidelidad.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {ratingDistribution.map(({ stars, percentage }, idx) => (
                            <motion.div
                                key={stars}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...APPLE_TRANSITION, delay: idx * 0.05 }}
                                className="flex items-center gap-4"
                            >
                                <span className="text-sm font-bold text-[#86868b] w-4">{stars}</span>
                                <div className="flex-1 h-[6px] bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ ...APPLE_TRANSITION, delay: 0.3 + idx * 0.1 }}
                                        className="h-full bg-[#0071e3]"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Filter Bar */}
            <section className="sticky top-[44px] z-40 px-4 py-8 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-[#f5f5f7] dark:border-[#1d1d1f]">
                <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex gap-3">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-2 rounded-full text-sm font-bold tracking-tight transition-all ${filter === 'all'
                                ? 'bg-[#0071e3] text-white shadow-lg shadow-[#0071e3]/20'
                                : 'bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2d2d2f]'
                                }`}
                        >
                            {t('reviews.filter_all')}
                        </button>
                        {[5, 4, 3].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => setFilter(rating)}
                                className={`px-6 py-2 rounded-full text-sm font-bold tracking-tight transition-all flex items-center gap-2 ${filter === rating
                                    ? 'bg-[#0071e3] text-white shadow-lg shadow-[#0071e3]/20'
                                    : 'bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2d2d2f]'
                                    }`}
                            >
                                {rating} {t('reviews.filter_stars')}
                            </button>
                        ))}
                    </div>
                    <div className="hidden md:block text-[#86868b] text-sm font-semibold">
                        {t('reviews.results_showing', { count: filteredReviews.length })}
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    <AnimatePresence mode="popLayout">
                        {filteredReviews.map((review) => (
                            <motion.div
                                layout
                                key={review.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={APPLE_TRANSITION}
                                className="break-inside-avoid bg-white dark:bg-[#161617] border border-[#f5f5f7] dark:border-[#1d1d1f] rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            {renderStars(review.rating, 'sm')}
                                            <h3 className="text-2xl font-bold tracking-tight leading-tight group-hover:text-[#0071e3] transition-colors">
                                                {review.title}
                                            </h3>
                                        </div>
                                        {review.verified && (
                                            <span className="flex items-center gap-1.5 text-xs font-bold text-[#34c759] uppercase tracking-widest">
                                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                                <span>{t('reviews.verified_label')}</span>
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-lg text-[#1d1d1f] dark:text-gray-300 font-medium leading-relaxed tracking-tight">
                                        "{review.content}"
                                    </p>

                                    <div className="pt-6 border-t border-[#f5f5f7] dark:border-[#1d1d1f] flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <p className="font-bold tracking-tight">{review.company}</p>
                                            <p className="text-sm text-[#86868b] font-medium">{review.author}</p>
                                        </div>
                                        <button className="text-[#86868b] hover:text-[#0071e3] transition-colors p-2">
                                            <ThumbsUp className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Dynamic Footer CTA */}
            <section className="py-48 px-4 text-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={APPLE_TRANSITION}
                    className="max-w-5xl mx-auto space-y-16"
                >
                    <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
                        {t('reviews.footer_title')} <br /> <span className="text-[#0071e3]">{t('reviews.footer_title_blue')}</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link to="/contact" className="bg-[#0071e3] text-white px-16 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform shadow-2xl shadow-[#0071e3]/40">
                            {t('reviews.cta_consultancy')}
                        </Link>
                        <button className="text-[#0071e3] font-bold text-2xl group flex items-center gap-2">
                            {t('reviews.cta_cases')} <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

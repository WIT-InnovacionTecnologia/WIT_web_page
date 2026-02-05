import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Check } from 'lucide-react';

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
                            ? 'fill-blue-600 text-blue-600'
                            : 'fill-gray-300 text-gray-300 dark:fill-gray-700 dark:text-gray-700'
                            }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-semibold mb-4"
                    >
                        Reseñas de clientes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400"
                    >
                        Descubre lo que nuestros clientes dicen sobre WIT
                    </motion.p>
                </div>
            </section>

            {/* Rating Summary */}
            <section className="py-12 px-4 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Overall Rating */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                <span className="text-6xl font-semibold">{averageRating}</span>
                                <div>
                                    {renderStars(5, 'lg')}
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {totalReviews} reseñas
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                98% de nuestros clientes recomiendan WIT
                            </p>
                        </div>

                        {/* Rating Distribution */}
                        <div className="space-y-3">
                            {ratingDistribution.map(({ stars, count, percentage }) => (
                                <div key={stars} className="flex items-center gap-3">
                                    <span className="text-sm w-12">{stars} estrellas</span>
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 transition-all duration-500"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                                        {count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-6 px-4 border-b border-gray-200 dark:border-gray-800 sticky top-[44px] bg-white dark:bg-black z-40">
                <div className="max-w-6xl mx-auto">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            Todas las reseñas
                        </button>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => setFilter(rating)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${filter === rating
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {rating} {renderStars(rating, 'sm')}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews List */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto space-y-6">
                    {filteredReviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        {renderStars(review.rating)}
                                        {review.verified && (
                                            <div className="flex items-center gap-1 text-blue-600 text-xs">
                                                <Check className="w-3 h-3" />
                                                <span>Cliente Verificado</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">{review.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="font-medium text-black dark:text-white">
                                            {review.author}
                                        </span>
                                        {review.company && (
                                            <>
                                                <span>•</span>
                                                <span>{review.company}</span>
                                            </>
                                        )}
                                        <span>•</span>
                                        <span>{review.date}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                {review.content}
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    <ThumbsUp className="w-4 h-4" />
                                    <span>Útil ({review.helpful})</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                        ¿Listo para transformar tu negocio?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        Únete a las empresas que confían en WIT
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors">
                            Contáctanos
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-4 rounded-full font-medium text-lg transition-colors">
                            Ver casos de éxito
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

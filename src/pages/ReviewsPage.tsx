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
        author: "María González",
        date: "15 de enero, 2026",
        rating: 5,
        title: "Excelente servicio y soluciones innovadoras",
        content: "WIT transformó completamente nuestra infraestructura tecnológica. El equipo demostró un profundo conocimiento técnico y una dedicación excepcional. La implementación de sus soluciones de IA nos permitió optimizar procesos y reducir costos operativos en un 40%.",
        helpful: 24,
        verified: true,
        company: "Banco Nacional"
    },
    {
        id: 2,
        author: "Carlos Rodríguez",
        date: "10 de enero, 2026",
        rating: 5,
        title: "Partner tecnológico confiable",
        content: "Llevamos 3 años trabajando con WIT y cada proyecto ha superado nuestras expectativas. Su enfoque en Business Intelligence nos ha dado insights valiosos para la toma de decisiones estratégicas.",
        helpful: 18,
        verified: true,
        company: "Retail Plus"
    },
    {
        id: 3,
        author: "Ana Martínez",
        date: "5 de enero, 2026",
        rating: 5,
        title: "Innovación que marca la diferencia",
        content: "La plataforma Sentinel ha revolucionado nuestra seguridad. El sistema de monitoreo inteligente detectó amenazas que nuestro sistema anterior no identificaba. Altamente recomendados.",
        helpful: 31,
        verified: true,
        company: "Ministerio de Desarrollo"
    },
    {
        id: 4,
        author: "Roberto Silva",
        date: "28 de diciembre, 2025",
        rating: 4,
        title: "Muy buena experiencia",
        content: "Implementamos WiFi Urban en nuestra ciudad y los resultados han sido impresionantes. El equipo técnico es muy profesional y el soporte post-venta es excelente.",
        helpful: 12,
        verified: true,
        company: "Municipalidad"
    },
    {
        id: 5,
        author: "Laura Fernández",
        date: "20 de diciembre, 2025",
        rating: 5,
        title: "Soluciones a medida que funcionan",
        content: "El desarrollo de nuestra plataforma e-commerce superó todas las expectativas. WIT entendió perfectamente nuestras necesidades y entregó una solución robusta, escalable y elegante.",
        helpful: 27,
        verified: true,
        company: "Fashion Store"
    },
    {
        id: 6,
        author: "Diego Morales",
        date: "12 de diciembre, 2025",
        rating: 5,
        title: "Consultoría de primer nivel",
        content: "La transformación digital que lideraron en nuestra empresa fue impecable. Desde el análisis inicial hasta la implementación final, todo estuvo perfectamente ejecutado.",
        helpful: 19,
        verified: true,
        company: "Industrias Morales"
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

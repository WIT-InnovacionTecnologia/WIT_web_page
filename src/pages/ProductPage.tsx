import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface ProductImage {
    url: string;
    alt: string;
    type: 'image' | 'video';
}

interface ProductPageProps {
    productName: string;
    tagline: string;
    description: string;
    price?: string;
    features: string[];
    images: ProductImage[];
    specs: { label: string; value: string }[];
}

export const ProductPage = ({
    productName,
    tagline,
    description,
    price,
    features,
    images,
    specs
}: ProductPageProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentImageIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = images.length - 1;
            if (newIndex >= images.length) newIndex = 0;
            return newIndex;
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            {/* Hero Section with Product Name */}
            <section className="pt-24 pb-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-semibold mb-4"
                    >
                        {productName}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6"
                    >
                        {tagline}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-700 dark:text-gray-300 mb-8"
                    >
                        {description}
                    </motion.p>
                    {price && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center gap-6 mb-4"
                        >
                            <span className="text-3xl font-semibold">{price}</span>
                        </motion.div>
                    )}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                            Solicitar demo
                        </button>
                        <button className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 px-6 py-3 rounded-full font-medium transition-colors">
                            Hablar con ventas
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="relative h-[400px] md:h-[600px] bg-gray-100 dark:bg-zinc-900 rounded-2xl overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentImageIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(_, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {images[currentImageIndex].type === 'image' ? (
                                    <img
                                        src={images[currentImageIndex].url}
                                        alt={images[currentImageIndex].alt}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <video
                                            src={images[currentImageIndex].url}
                                            className="w-full h-full object-contain"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <Play className="w-16 h-16 text-white opacity-50" />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={() => paginate(-1)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-3 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => paginate(1)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-3 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* Dots Indicator */}
                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setDirection(index > currentImageIndex ? 1 : -1);
                                            setCurrentImageIndex(index);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                            ? 'bg-blue-600 w-6'
                                            : 'bg-gray-400 dark:bg-gray-600'
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Thumbnail Gallery */}
                    {images.length > 1 && (
                        <div className="mt-6 grid grid-cols-4 md:grid-cols-6 gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentImageIndex ? 1 : -1);
                                        setCurrentImageIndex(index);
                                    }}
                                    className={`relative aspect-square rounded-lg overflow-hidden transition-all ${index === currentImageIndex
                                        ? 'ring-2 ring-blue-600 scale-105'
                                        : 'hover:scale-105'
                                        }`}
                                >
                                    {image.type === 'image' ? (
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800">
                                            <Play className="absolute inset-0 m-auto w-8 h-8 text-gray-600" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
                        Características principales
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <p className="text-lg">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specs Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
                        Especificaciones técnicas
                    </h2>
                    <div className="space-y-4">
                        {specs.map((spec, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-800"
                            >
                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                    {spec.label}
                                </span>
                                <span className="text-gray-900 dark:text-white">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                        Lleva {productName} a tu empresa
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        Contacta con nuestro equipo de ventas para más información
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors">
                            Solicitar demo
                        </button>
                        <button className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-4 rounded-full font-medium text-lg transition-colors">
                            Hablar con ventas
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

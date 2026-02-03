
import { motion } from 'framer-motion';
import heroVideo from '../assets/videos/aerial-birds-eye-tracking-shot-of-car-and-truck-dr-2025-08-28-14-35-14-utc.mov';
export const Hero = () => {
    // const { t } = useTranslation(); // Removed unused translation hook

    // Text Variables for easy access
    const title = "Desarrollamos el futuro de tu empresa";
    const subtitle = "Especialistas en modernizar procesos críticos mediante Inteligencia Artificial, conectividad de alto estándar y soluciones de telemetría avanzada";
    const buyButtonText = "Conócenos";
    const learnMoreText = "hablemos";

    return (
        <section className="relative min-h-[calc(100vh-44px)] flex flex-col items-center pt-20 pb-10 overflow-hidden bg-white dark:bg-transparent text-center transition-colors duration-300">

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10"
            >
                <h2 className="text-5xl md:text-7xl font-semibold mb-2 text-black dark:text-white tracking-tight max-w-4xl mx-auto">
                    {title}
                </h2>
                <p className="text-2xl md:text-3xl font-medium mb-6 text-black dark:text-gray-200 max-w-3xl mx-auto">
                    {subtitle}
                </p>
                <div className="flex justify-center space-x-6">
                    <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition-colors text-lg font-medium">
                        {buyButtonText}
                    </button>
                    <a href="#footer" className="text-blue-600 dark:text-blue-400 hover:underline px-6 py-2 text-lg font-medium flex items-center">
                        {learnMoreText} <span className="text-xs ml-1">›</span>
                    </a>
                </div>
            </motion.div>

            {/* Hero Image / Placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="mt-12 w-full px-4"
            >
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 dark:bg-gray-800 shadow-xl flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Placeholder for User Product Image */}
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={heroVideo} />
                        Tu navegador no soporta el tag de video.
                    </video>

                    {/* Video Overlay Text */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">MásGPS</h3>
                        <p className="text-white text-lg md:text-xl font-medium max-w-2xl drop-shadow-md leading-relaxed">
                            Mantén el control total de tu flota con nuestra plataforma MásGPS. Gestiona rutas, recibe alertas y toma decisiones en tiempo real desde cualquier dispositivo para transformar los datos de cada vehículo en decisiones que potencien la rentabilidad.
                        </p>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

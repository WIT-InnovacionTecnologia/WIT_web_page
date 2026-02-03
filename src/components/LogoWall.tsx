import { motion } from 'framer-motion';

// Logos
import pullmanBusLogo from '../assets/logo-banco-estado.png'; // Local asset from base64 (Renamed to Pullman Bus as per user feedback)
const cleveroxLogo = "https://www.cleverox.com/wp-content/uploads/2018/10/metro.png";
const parqueAraucoLogo = "https://logosdechile.cl/cdn/shop/products/ParqueArauco.jpg?v=1618962183&width=1680";
const transantiagoLogo = "https://www.sistemas-sustentables.com/wp-content/uploads/2014/12/transantiago.png";
const claroLogo = "https://1000marcas.net/wp-content/uploads/2021/02/Claro-Logo-640x363.png";

const logos = [
    { src: cleveroxLogo, alt: "Metro" },
    { src: pullmanBusLogo, alt: "Pullman Bus", scale: 2.0 }, // Increased size for Pullman Bus
    { src: parqueAraucoLogo, alt: "Parque Arauco", scale: 1.5 }, // Increased size for Parque Arauco
    { src: transantiagoLogo, alt: "Transantiago" },
    { src: claroLogo, alt: "Claro" },
];

export const LogoWall = () => {
    // Determine number of duplicates needed to fill screen + overflow for smooth loop
    // For safety, we repeat the list 4 times.
    const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="relative z-0 py-12 bg-white dark:bg-black overflow-hidden border-t border-gray-100 dark:border-white/5">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Confían en nosotros
                </p>
            </div>

            <div className="flex relative overflow-hidden">
                <motion.div
                    className="flex gap-16 items-center min-w-full"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        duration: 30, // Adjust speed here (higher = slower)
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {repeatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{ transform: logo.scale ? `scale(${logo.scale})` : 'scale(1)' }}
                                className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-screen"
                            // mix-blend helps logos blend with bg, remove if they have transparent bg and look weird
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

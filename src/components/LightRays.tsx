import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LightRays = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden dark:block">
            {/* Main dark background */}
            <div className="absolute inset-0 bg-black" />

            {/* Moving Light Ray 1 */}
            <motion.div
                animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[140vh] bg-gradient-to-r from-blue-900/20 via-blue-600/10 to-transparent blur-[100px] transform rotate-12"
            />

            {/* Moving Light Ray 2 */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 5, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[-20%] right-[-10%] w-[60vw] h-[140vh] bg-gradient-to-l from-purple-900/20 via-purple-600/10 to-transparent blur-[100px] transform -rotate-12"
            />

            {/* Mouse follower glow */}
            <div
                className="absolute w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full transition-transform duration-200 ease-out"
                style={{
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                }}
            />

            {/* Overlay Gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        </div>
    );
};

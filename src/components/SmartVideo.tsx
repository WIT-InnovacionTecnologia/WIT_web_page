import { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SmartVideoProps {
    src: string;
    poster?: string;
    className?: string;
    children?: React.ReactNode;
}

export const SmartVideo = ({ src, poster, className = "", children }: SmartVideoProps) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Preload video only after page load
        const preloadVideo = () => {
            const video = document.createElement("video");
            video.preload = "auto";
            video.src = src;

            video.onloadeddata = () => {
                setIsVideoLoaded(true);

                // Attempt to play the main video
                setTimeout(() => {
                    if (videoRef.current) {
                        const playPromise = videoRef.current.play();
                        if (playPromise !== undefined) {
                            playPromise.catch(() => {
                                console.log("Autoplay blocked, waiting for user interaction");
                            });
                        }
                    }
                }, 500);
            };
        };

        const handlePageLoad = () => {
            preloadVideo();
        };

        if (document.readyState === 'complete') {
            preloadVideo();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => window.removeEventListener('load', handlePageLoad);
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder while loading */}
            <AnimatePresence>
                {!isVideoLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-20 bg-gray-900 flex items-center justify-center"
                    >
                        {poster && (
                            <img
                                src={poster}
                                alt="Loading video"
                                className="absolute inset-0 w-full h-full object-cover opacity-50"
                                loading="eager"
                            />
                        )}
                        <div className="relative z-10 p-4 rounded-full bg-black/20 backdrop-blur-sm">
                            <Loader2 className="h-8 w-8 text-white/70 animate-spin" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Video */}
            <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                autoPlay
                loop
                muted
                playsInline
                src={src}
            >
                {/* Fallback content if needed */}
            </video>

            {/* Overlay Content (passed as children) */}
            <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </div>
    );
};

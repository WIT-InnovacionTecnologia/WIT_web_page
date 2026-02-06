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
        const video = videoRef.current;
        if (!video) return;

        // Observer to handle Play/Pause based on visibility
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Element is visible - try to play
                        const playPromise = video.play();
                        if (playPromise !== undefined) {
                            playPromise.catch(() => {
                                // Auto-play was prevented
                                // Show a muted play button UI if needed, or just fail silently for bg videos
                            });
                        }
                    } else {
                        // Element is not visible - pause
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.2, // Play when 20% visible
                rootMargin: "50px" // Pre-load/play slightly before entering viewport
            }
        );

        observer.observe(video);

        // Initial setup: preload metadata
        video.preload = "metadata";

        const handlePageLoad = () => {
            // Allow aggressive loading only after critical resources are done
            if (video) video.preload = "auto";
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('load', handlePageLoad);
        };
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder / Spinner Overlay */}
            <AnimatePresence>
                {!isVideoLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
                    >
                        {poster && (
                            <img
                                src={poster}
                                alt="Loading video"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="eager"
                            />
                        )}
                        {/* Only show spinner until we have data */}
                        <div className="relative z-10 p-4 rounded-full bg-black/20 backdrop-blur-sm">
                            <Loader2 className="h-8 w-8 text-white/70 animate-spin" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Video */}
            <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-700 opacity-100`}
                muted
                loop
                playsInline
                src={src}
                onLoadedData={() => setIsVideoLoaded(true)}
            >
                {/* Fallback content if needed */}
            </video>

            {/* Overlay Content (passed as children) */}
            <div className={`absolute inset-0 z-10`}>
                {children}
            </div>
        </div>
    );
};

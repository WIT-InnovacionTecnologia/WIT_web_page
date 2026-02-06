import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from 'react-i18next';

import pullmanBusLogo from '../assets/light/logo-banco-estado.png';

export const ScrollTimeline = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Placeholder data with random descriptions as requested
    const timelineData = [
        {
            company: "Metro de Santiago",
            logo: "https://www.cleverox.com/wp-content/uploads/2018/10/metro.png",
            description: t('timeline.items.metro'),
        },
        {
            company: "Pullman Bus",
            logo: pullmanBusLogo, // Using the local asset which is actually Pullman Bus now
            description: t('timeline.items.pullman'),
        },
        {
            company: "Parque Arauco",
            logo: "https://logosdechile.cl/cdn/shop/products/ParqueArauco.jpg?v=1618962183&width=1680",
            description: t('timeline.items.parque_arauco'),
        },
        {
            company: "Transantiago",
            logo: "https://www.sistemas-sustentables.com/wp-content/uploads/2014/12/transantiago.png",
            description: t('timeline.items.transantiago'),
        },
        {
            company: "Claro",
            logo: "https://1000marcas.net/wp-content/uploads/2021/02/Claro-Logo-640x363.png",
            description: t('timeline.items.claro'),
        },
    ];

    return (
        <div ref={ref} className="w-full relative bg-white dark:bg-transparent font-sans md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white max-w-4xl text-center mx-auto">
                    {t('timeline.title')}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg text-center mx-auto mb-20 text-balance">
                    {t('timeline.description')}
                </p>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-[50%] top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 md:translate-x-0">
                        <motion.div
                            style={{ height }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
                        />
                    </div>

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row justify-between items-center w-full mb-24 relative`}
                        >
                            {/* Dot on the line */}
                            <div className="absolute left-[20px] md:left-[50%] top-6 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 z-20 -translate-x-1/2 md:translate-x-0 md:-ml-[7px]" />

                            {/* Left Side (Content for even, empty for odd on desktop) */}
                            <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                                {/* Content Container */}
                                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0">
                                            <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{item.company}</h3>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for the other side on desktop */}
                            <div className="hidden md:block w-5/12" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

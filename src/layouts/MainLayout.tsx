import type { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LogoWall } from '../components/LogoWall';
import Beams from '../components/Beams';
import { LightRays } from '../components/LightRays';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-black dark:text-white relative">
            {/* Global Background Effects for Dark Mode */}
            <div className="fixed inset-0 z-0 hidden dark:block pointer-events-none">
                <Beams
                    beamWidth={3}
                    beamHeight={35}
                    beamNumber={20}
                    lightColor="#ffffff"
                    speed={1.0}
                    noiseIntensity={2.0}
                    scale={0.1}
                    rotation={30}
                />
                <LightRays />
            </div>

            <Navbar />
            <main className="flex-grow pt-[44px] relative z-10"> {/* pt-[44px] to account for Navbar height */}
                <div className="relative min-h-full">
                    <div className="absolute inset-0 pointer-events-none hidden dark:block opacity-40">
                        <LightRays />
                    </div>
                    <div className="relative z-10">
                        {children}
                    </div>
                </div>
            </main>
            <LogoWall />
            <Footer />
        </div>
    );
};

import type { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-white">
            <Navbar />
            <main className="flex-grow pt-[44px]"> {/* pt-[44px] to account for Navbar height */}
                {children}
            </main>
            <Footer />
        </div>
    );
};

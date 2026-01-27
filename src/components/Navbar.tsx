import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, Search, Apple, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { navData } from '../lib/navData';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Search state
    const [scrolled, setScrolled] = useState(false);
    const [activeHover, setActiveHover] = useState<string | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu or search is open
    useEffect(() => {
        if (isOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, isSearchOpen]);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            setTimeout(() => searchInputRef.current?.focus(), 300);
        }
    }, [isSearchOpen]);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setActiveHover(null); // Close mega menu if open
            setIsOpen(false); // Close mobile menu if open
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };

    const dropdownVariants: Variants = {
        hidden: { opacity: 0, height: 0, y: -10 },
        visible: {
            opacity: 1,
            height: 'auto',
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    const searchQuickLinks = [
        "Find a Store",
        "Apple Vision Pro",
        "AirPods",
        "Apple Intelligence",
        "Apple Trade In"
    ];

    return (
        <nav
            onMouseLeave={() => setActiveHover(null)}
            className={`fixed top-0 w-full z-50 transition-colors duration-500 ${isOpen || activeHover || isSearchOpen ? 'bg-white text-black' : scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 text-black' : 'bg-transparent text-black'
                }`}
        >
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 relative z-50 bg-inherit">
                <div className="flex items-center justify-between h-[44px]">

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center justify-between w-full text-xs font-normal relative">
                        {/* WIT Logo */}
                        <a href="/" className={`opacity-80 hover:opacity-100 transition-opacity ${isSearchOpen ? 'hidden' : 'block'}`}>
                            <img
                                src={`${import.meta.env.BASE_URL}wit-logo.png`}
                                alt="WIT"
                                className="h-[20px] w-auto object-contain"
                            />
                        </a>

                        {/* Search Input (Desktop) */}
                        <AnimatePresence>
                            {isSearchOpen && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute left-0 flex items-center w-full max-w-2xl"
                                >
                                    <Search size={16} className="text-gray-500 mr-3" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search apple.com"
                                        className="w-full bg-transparent text-xl outline-none placeholder-gray-400 text-black"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Links (Hidden when search is open) */}
                        <div className={`flex items-center justify-between flex-1 px-8 ${isSearchOpen ? 'hidden' : 'flex'}`}>
                            {Object.keys(navData).map((linkName) => (
                                <div
                                    key={linkName}
                                    className="h-full flex items-center"
                                    onMouseEnter={() => setActiveHover(linkName)}
                                >
                                    <a
                                        href="#" // Placeholder path
                                        className="opacity-80 hover:opacity-100 transition-opacity tracking-wide text-current px-2 py-4"
                                    >
                                        {linkName}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Right Icons / Close Search */}
                        <div className="flex items-center space-x-6 z-10 bg-inherit pl-4">
                            {!isSearchOpen ? (
                                <>
                                    <Search
                                        size={14}
                                        className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
                                        onClick={toggleSearch}
                                    />
                                    <ShoppingBag size={14} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                                </>
                            ) : (
                                <X
                                    size={18}
                                    className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity text-gray-500"
                                    onClick={toggleSearch}
                                />
                            )}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden items-center justify-between w-full text-current">
                        <div className="z-50 logo-container transition-opacity duration-300">
                            <a href="/" className={`block ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                                <Apple size={18} fill="currentColor" />
                            </a>
                        </div>

                        <div className="flex items-center gap-6 z-50">
                            <Search
                                size={18}
                                className={`cursor-pointer transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                                onClick={toggleSearch} // Hooking up mobile search icon too
                            />
                            <ShoppingBag size={18} className={`cursor-pointer transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`text-current focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90 text-white' : ''}`}
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            <AnimatePresence>
                {activeHover && navData[activeHover] && !isSearchOpen && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-[44px] left-0 w-full bg-white shadow-xl overflow-hidden hidden md:block border-t border-gray-100"
                        onMouseEnter={() => setActiveHover(activeHover)}
                        onMouseLeave={() => setActiveHover(null)}
                    >
                        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 py-10">
                            <div className="flex justify-start space-x-12">
                                {navData[activeHover].map((column, idx) => (
                                    <div key={idx} className="flex flex-col space-y-4 min-w-[150px]">
                                        <h4 className="text-gray-500 text-xs font-semibold">{column.title}</h4>
                                        <ul className="space-y-2">
                                            {column.links.map((link) => (
                                                <li key={link}>
                                                    <a href="#" className="text-gray-900 text-lg md:text-xl font-semibold hover:text-blue-600">
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Panel Dropdown (Quick Links) */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-[44px] left-0 w-full bg-white shadow-xl overflow-hidden hidden md:block border-t border-gray-100"
                    >
                        <div className="max-w-[600px] mx-auto px-4 py-10">
                            <h3 className="text-gray-500 text-xs font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
                            <ul className="space-y-1">
                                {searchQuickLinks.map((link, idx) => (
                                    <motion.li
                                        key={link}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 + 0.1 }}
                                        className="group"
                                    >
                                        <a href="#" className="text-gray-900 text-lg hover:text-blue-600 hover:bg-gray-50 block py-1 px-4 -mx-4 rounded-lg flex justify-between items-center">
                                            {link}
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-gray-400" />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1.000] }}
                        className="md:hidden fixed inset-0 bg-black z-40 pt-[48px] px-8"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col space-y-1"
                        >
                            {Object.keys(navData).map((linkName) => (
                                <motion.a
                                    key={linkName}
                                    variants={itemVariants}
                                    href="#"
                                    className="text-[28px] font-semibold text-[#E8E8ED] py-2 border-b border-gray-800 leading-tight"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {linkName}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay background blur when menu OR search is active on desktop */}
            <AnimatePresence>
                {(activeHover || isSearchOpen) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[44px] bg-black/20 backdrop-blur-sm z-[-1] hidden md:block"
                        style={{ height: 'calc(100vh - 44px)' }}
                        onClick={() => {
                            setActiveHover(null);
                            setIsSearchOpen(false);
                        }}
                    />
                )}
            </AnimatePresence>
        </nav>
    );
};

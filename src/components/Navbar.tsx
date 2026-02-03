import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, Search, ChevronRight, Globe, Sun, Moon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { navData } from '../lib/navData';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Search state
    const [scrolled, setScrolled] = useState(false);
    const [activeHover, setActiveHover] = useState<string | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check system preference or localStorage
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDarkMode(true);
        }
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

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

    const searchQuickLinksTitle = t('navbar.quick_links');
    const searchQuickLinks = [
        t('navbar.store'),
        t('navbar.vision'),
        t('navbar.airpods'),
        "Apple Intelligence",
        "Apple Trade In"
    ];

    const navItems = [
        { key: 'Producto', label: 'Producto' },
        { key: 'Clientes', label: 'Clientes' },
        { key: 'Partners', label: 'Partners' },
        { key: 'IA', label: 'IA' },
        { key: 'BI', label: 'BI' },
        { key: 'Acerca de WIT', label: 'Acerca de WIT' },
    ];

    return (
        <nav
            onMouseLeave={() => setActiveHover(null)}
            className={`fixed top-0 w-full z-50 transition-colors duration-500 ${isOpen || activeHover || isSearchOpen ? 'bg-white dark:bg-black text-black dark:text-white' : scrolled ? 'bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 text-black dark:text-white' : 'bg-transparent text-black dark:text-white'
                }`}
        >
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 relative z-50">
                <div className="flex items-center justify-between h-[44px]">

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center justify-between w-full text-xs font-normal relative">
                        {/* WIT Logo */}
                        <Link to="/" className={`opacity-80 hover:opacity-100 transition-opacity flex items-center ${isSearchOpen ? 'hidden' : 'flex'}`}>
                            <img
                                src={`${import.meta.env.BASE_URL}wit-logo.png`}
                                alt="WIT"
                                className="h-[20px] w-auto object-contain"
                            />
                        </Link>

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
                                        placeholder={t('navbar.search_placeholder')}
                                        className="w-full bg-transparent text-xl outline-none placeholder-gray-400 text-black"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Links (Hidden when search is open) */}
                        <div className={`flex items-center justify-between flex-1 px-8 ${isSearchOpen ? 'hidden' : 'flex'}`}>
                            {navItems.map((item) => (
                                <div
                                    key={item.key}
                                    className="h-full flex items-center"
                                    onMouseEnter={() => setActiveHover(item.label)} // Keeping label for hover logic to match navData
                                >
                                    <a
                                        href="#" // Placeholder path
                                        className="opacity-80 hover:opacity-100 transition-opacity tracking-wide text-current px-2 py-4"
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Right Icons / Close Search / Language */}
                        <div className="flex items-center space-x-6 z-10 pl-4">
                            {!isSearchOpen ? (
                                <>
                                    <Search
                                        size={14}
                                        className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
                                        onClick={toggleSearch}
                                    />
                                    <ShoppingBag size={14} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />

                                    {/* Language Switcher */}
                                    <div className="relative group">
                                        <Globe size={14} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                                        <div className="absolute right-0 top-full pt-2 w-32 hidden group-hover:block">
                                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl py-2 border border-gray-100 dark:border-gray-800">
                                                <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs dark:text-gray-200">English</button>
                                                <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs dark:text-gray-200">Español</button>
                                                <button onClick={() => changeLanguage('pt')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs dark:text-gray-200">Português</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dark Mode Toggle */}
                                    <button
                                        onClick={toggleDarkMode}
                                        className="opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
                                    >
                                        {isDarkMode ? (
                                            <Sun size={14} />
                                        ) : (
                                            <Moon size={14} />
                                        )}
                                    </button>
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
                            <Link to="/" className={`flex items-center ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                                <img
                                    src={`${import.meta.env.BASE_URL}wit-logo.png`}
                                    alt="WIT"
                                    className="h-[24px] w-auto object-contain"
                                />
                            </Link>
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
                        className="absolute top-[44px] left-0 w-full bg-white dark:bg-gray-900 shadow-xl overflow-hidden hidden md:block border-t border-gray-100 dark:border-gray-800"
                        onMouseEnter={() => setActiveHover(activeHover)}
                        onMouseLeave={() => setActiveHover(null)}
                    >
                        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 py-10">
                            <div className="flex justify-start space-x-12">
                                {navData[activeHover].map((column, idx) => (
                                    <div key={idx} className="flex flex-col space-y-4 min-w-[150px]">
                                        <h4 className="text-gray-500 dark:text-gray-400 text-xs font-semibold">{column.title}</h4>
                                        <ul className="space-y-2 mt-2">
                                            {column.links.map((link) => (
                                                <li key={link}>
                                                    {link === 'Timeline' ? (
                                                        <Link
                                                            to="/timeline"
                                                            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-xs block py-1"
                                                            onClick={() => setActiveHover(null)} // Close menu on click
                                                        >
                                                            {link}
                                                        </Link>
                                                    ) : (
                                                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-xs block py-1">
                                                            {link}
                                                        </a>
                                                    )}
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
                        className="absolute top-[44px] left-0 w-full bg-white dark:bg-gray-900 shadow-xl overflow-hidden hidden md:block border-t border-gray-100 dark:border-gray-800"
                    >
                        <div className="max-w-[600px] mx-auto px-4 py-10">
                            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-4 uppercase tracking-wider">{searchQuickLinksTitle}</h3>
                            <ul className="space-y-1">
                                {searchQuickLinks.map((link, idx) => (
                                    <motion.li
                                        key={link}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 + 0.1 }}
                                        className="group"
                                    >
                                        <a href="#" className="text-gray-900 dark:text-gray-100 text-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 block py-1 px-4 -mx-4 rounded-lg flex justify-between items-center">
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
                        className="md:hidden fixed inset-0 bg-white dark:bg-black z-40 pt-[48px] px-8"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col h-full"
                        >
                            <div className="space-y-1">
                                {navItems.map((item) => {
                                    const hasSubMenu = navData[item.key];
                                    const isExpanded = activeMobileMenu === item.key;

                                    return (
                                        <div key={item.key} className="border-b border-gray-200 dark:border-gray-800">
                                            {hasSubMenu ? (
                                                <>
                                                    <button
                                                        onClick={() => setActiveMobileMenu(isExpanded ? null : item.key)}
                                                        className="flex items-center justify-between w-full text-[28px] font-semibold text-gray-900 dark:text-[#E8E8ED] py-2 leading-tight text-left"
                                                    >
                                                        {item.label}
                                                        <ChevronDown
                                                            size={24}
                                                            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                        />
                                                    </button>
                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden bg-gray-50 dark:bg-gray-900/50 rounded-lg mb-2"
                                                            >
                                                                <div className="py-4 px-4 space-y-6">
                                                                    {navData[item.key].map((column, idx) => (
                                                                        <div key={idx} className="space-y-3">
                                                                            <h4 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                                                                {column.title}
                                                                            </h4>
                                                                            <ul className="space-y-2 pl-2 border-l-2 border-gray-200 dark:border-gray-700">
                                                                                {column.links.map((link) => (
                                                                                    <li key={link}>
                                                                                        {link === 'Timeline' ? (
                                                                                            <Link
                                                                                                to="/timeline"
                                                                                                className="block text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 pl-4 py-1"
                                                                                                onClick={() => setIsOpen(false)}
                                                                                            >
                                                                                                {link}
                                                                                            </Link>
                                                                                        ) : (
                                                                                            <a
                                                                                                href="#"
                                                                                                className="block text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 pl-4 py-1"
                                                                                                onClick={() => setIsOpen(false)}
                                                                                            >
                                                                                                {link}
                                                                                            </a>
                                                                                        )}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <motion.a
                                                    variants={itemVariants}
                                                    href="#"
                                                    className="block text-[28px] font-semibold text-gray-900 dark:text-[#E8E8ED] py-2 leading-tight text-left w-full"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.label}
                                                </motion.a>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mobile Language and Theme Switcher - Bottom Positioned */}
                            <motion.div variants={itemVariants} className="mt-auto pb-8 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Globe size={20} className="text-gray-900 dark:text-white" />
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <button onClick={() => changeLanguage('en')} className={`${i18n.language === 'en' ? 'text-black dark:text-white' : 'text-gray-400'} hover:text-black dark:hover:text-white transition-colors`}>EN</button>
                                        <span className="text-gray-300 dark:text-gray-700">|</span>
                                        <button onClick={() => changeLanguage('es')} className={`${i18n.language === 'es' ? 'text-black dark:text-white' : 'text-gray-400'} hover:text-black dark:hover:text-white transition-colors`}>ES</button>
                                        <span className="text-gray-300 dark:text-gray-700">|</span>
                                        <button onClick={() => changeLanguage('pt')} className={`${i18n.language === 'pt' ? 'text-black dark:text-white' : 'text-gray-400'} hover:text-black dark:hover:text-white transition-colors`}>PT</button>
                                    </div>
                                </div>

                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 text-gray-900 dark:text-white opacity-80 hover:opacity-100 transition-opacity"
                                >
                                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            </motion.div>
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

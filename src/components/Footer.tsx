import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoLight from '../assets/logoWITMiniLight.png';
import logoDark from '../assets/logoWITMiniDark.png';
import verticalBanner from '../assets/banner vertical wit 2026.png';
import horizontalBanner from '../assets/footer-bar.png';


export const Footer = () => {
    const { t } = useTranslation();

    // Text Variables
    const copyrightText = t('footer.copyright');

    const footerSections = [
        {
            title: t('footer.solutions'),
            links: [t('menu.solutions.items.software'), t('menu.solutions.items.consulting'), t('menu.solutions.items.digital'), t('menu.solutions.items.cyber')],
        },
        {
            title: t('footer.platforms'),
            links: [t('menu.platforms.items.saas'), t('menu.platforms.items.cloud'), t('menu.platforms.items.integrations'), t('menu.platforms.items.apis')],
        },
        {
            title: t('footer.company'),
            links: [t('menu.about_section.title'), t('menu.cases.title'), t('navbar.partners'), t('menu.about_section.items.careers')],
        },
        {
            title: t('footer.contact'),
            links: [
                'Casa Matriz: Obispo Umaña 633, Estación Central, Santiago',
                'Iquique: Barros Arana 825',
                'Antofagasta: Pedro Aguirre Cerda 121160',
                '+56 9 9848 1845',
                'contacto@wit.la'
            ],
        },
    ];

    return (
        <footer id="footer" className="relative z-10 bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-100 text-sm pt-10 border-t border-gray-200 dark:border-white/10">
            <div className="w-full px-4 sm:px-6 lg:px-8 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                    {/* Main Footer Content */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
                            {/* Logo Section */}
                            <div className="col-span-1 sm:col-span-2 md:col-span-1 mb-8 md:mb-0 flex items-start">
                                <img
                                    src={logoLight}
                                    alt="WIT Logo"
                                    className="h-10 md:h-14 w-auto dark:hidden"
                                />
                                <img
                                    src={logoDark}
                                    alt="WIT Logo"
                                    className="h-10 md:h-14 w-auto hidden dark:block"
                                />
                            </div>

                            {/* Links Sections */}
                            {footerSections.map((section) => (
                                <div key={section.title}>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-7">{section.title}</h3>
                                    <ul className="space-y-6">
                                        {section.links.map((link) => (
                                            <li key={link}>
                                                <Link
                                                    to={section.title === t('footer.contact') ? '/contact' : '#'}
                                                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline"
                                                >
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-2 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
                                <p className="text-center text-[10px]">{copyrightText}</p>
                                <div className="flex space-x-2 text-[10px]">
                                    <Link to="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.privacy')}</Link>
                                    <span className="text-gray-300 dark:text-gray-600">|</span>
                                    <Link to="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.terms')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Banner Section - Responsive Layout */}
                    <div className="flex flex-col items-center lg:items-end justify-center lg:justify-start w-full lg:w-auto">
                        {/* Vertical Banner for Desktop */}
                        <img
                            src={verticalBanner}
                            alt="WIT Vertical Banner"
                            className="hidden lg:block h-auto max-h-[300px] w-auto object-contain"
                        />
                        {/* Horizontal Banner for Mobile - Full width of footer container */}
                        <div className="block lg:hidden w-full overflow-hidden rounded-2xl mt-8">
                            <img
                                src={horizontalBanner}
                                alt="WIT Horizontal Banner"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoWhite from '../assets/wit-global-partnership-white.png';
import logoBlack from '../assets/wit-global-partnership.png';
import footerBar from '../assets/footer-bar.png';

export const Footer = () => {
    const { t } = useTranslation();

    // Text Variables
    const copyrightText = t('footer.copyright');

    const footerSections = [
        {
            title: t('footer.solutions'),
            links: ['Desarrollo de Software', 'Consultoría TI', 'Transformación Digital', 'Ciberseguridad'],
        },
        {
            title: t('footer.platforms'),
            links: ['SaaS', 'Cloud Computing', 'Integraciones', 'APIs'],
        },
        {
            title: t('footer.company'),
            links: ['Sobre Nosotros', 'Casos de Éxito', 'Partners', 'Carreras'],
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
        <footer id="footer" className="relative z-10 bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-100 text-xs pt-10 border-t border-gray-200 dark:border-white/10 flex flex-col justify-between">
            <div className="w-full px-4 sm:px-6 lg:px-8 mb-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Logo Section */}
                    <div className="col-span-2 md:col-span-1 mb-6 md:mb-0">
                        <img
                            src={logoBlack}
                            alt="WIT Logo"
                            className="h-28 md:h-36 w-auto dark:hidden mb-4"
                        />
                        <img
                            src={logoWhite}
                            alt="WIT Logo"
                            className="h-28 md:h-36 w-auto hidden dark:block mb-4"
                        />
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-center">{copyrightText}</p>
                        <div className="flex space-x-4">
                            <Link to="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.privacy')}</Link>
                            <span className="text-gray-300 dark:text-gray-600">|</span>
                            <Link to="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.terms')}</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Colorful Footer Bar */}
            <div className="w-full">
                <img src={footerBar} alt="WIT Footer Bar" className="w-full h-auto object-cover" />
            </div>
        </footer>
    );
};

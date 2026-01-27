

export const Footer = () => {
    const footerSections = [
        {
            title: 'Shop and Learn',
            links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
        },
        {
            title: 'Apple Wallet',
            links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
        },
        {
            title: 'Account',
            links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
        },
        {
            title: 'Entertainment',
            links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'],
        },
    ];

    return (
        <footer className="bg-gray-100 text-gray-600 text-xs py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-gray-900 mb-2">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:underline hover:text-gray-900 transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="mb-2">More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">Terms of Use</a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">Sales and Refunds</a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">Legal</a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">Site Map</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

import { motion } from 'framer-motion';
import { CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

interface ToolPageProps {
    name: string;
    description: string;
    color: string;
    features: string[];
}

const ToolTemplate = ({ name, description, color, features }: ToolPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 selection:bg-[#0071e3]/20">
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={APPLE_TRANSITION}
                        className="space-y-8"
                    >
                        <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${color} border-current`}>
                            {t('bi_tools.template.tag')}
                        </span>
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
                            WIT + <br />
                            <span className={color}>{name}</span>
                        </h1>
                        <p className="text-2xl text-[#86868b] font-medium leading-tight">
                            {description}
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate(`/request-demo?product=${name}`)}
                                className="bg-[#0071e3] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0077ed] transition-all"
                            >
                                {t('bi_tools.template.cta')}
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...APPLE_TRANSITION, delay: 0.2 }}
                        className="bg-[#f5f5f7] dark:bg-[#111111] aspect-square rounded-[4rem] flex items-center justify-center p-20 shadow-inner group border border-transparent dark:border-white/5"
                    >
                        <div className={`w-full h-full rounded-[3rem] bg-gradient-to-br transition-all duration-700 ${color === 'text-[#f2c811]' ? 'from-yellow-400/20' : color === 'text-[#e94e1b]' ? 'from-orange-500/20' : 'from-blue-500/20'} to-transparent flex items-center justify-center`}>
                            <LinkIcon className="w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                            className="bg-[#f5f5f7] dark:bg-transparent p-10 rounded-[3rem] space-y-4 border border-transparent dark:border-white/10"
                        >
                            <CheckCircle2 className={`w-8 h-8 ${color}`} />
                            <h3 className="text-xl font-bold">{feature}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export const PowerBIPage = () => {
    const { t } = useTranslation();
    return (
        <ToolTemplate
            name="Power BI"
            color="text-[#f2c811]"
            description={t('bi_tools.powerbi.desc')}
            features={t('bi_tools.powerbi.features', { returnObjects: true }) as string[]}
        />
    );
};

export const TableauPage = () => {
    const { t } = useTranslation();
    return (
        <ToolTemplate
            name="Tableau"
            color="text-[#e94e1b]"
            description={t('bi_tools.tableau.desc')}
            features={t('bi_tools.tableau.features', { returnObjects: true }) as string[]}
        />
    );
};

export const LookerPage = () => {
    const { t } = useTranslation();
    return (
        <ToolTemplate
            name="Looker"
            color="text-[#4285f4]"
            description={t('bi_tools.looker.desc')}
            features={t('bi_tools.looker.features', { returnObjects: true }) as string[]}
        />
    );
};

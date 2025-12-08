import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Zap, Target, Users, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const strengthIcons = [Target, Zap, Lightbulb, Users, User];

export default function About() {
    const { about } = portfolioData;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
        },
    };

    return (
        <section id="about" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="relative z-10 section-container"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="section-title gradient-text">About Me</h2>
                    <p className="section-subtitle mx-auto">
                        A passionate developer who loves building impactful solutions
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Bio Section */}
                    <motion.div variants={itemVariants}>
                        <div className="glass-card p-8">
                            <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
                                {about.bio}
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4 mt-6"
                        >
                            {about.stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="glass-card p-6 text-center glass-card-hover"
                                >
                                    <div className="text-3xl font-bold gradient-text-accent mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-text-muted)]">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Strengths Section */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-semibold mb-6 text-[var(--color-text-primary)]">
                            Key Strengths
                        </h3>
                        <div className="space-y-4">
                            {about.strengths.map((strength, index) => {
                                const Icon = strengthIcons[index % strengthIcons.length];
                                return (
                                    <motion.div
                                        key={strength}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="glass-card p-4 flex items-center gap-4 glass-card-hover"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center">
                                            <Icon size={20} className="text-[var(--color-accent)]" />
                                        </div>
                                        <span className="text-[var(--color-text-secondary)]">
                                            {strength}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

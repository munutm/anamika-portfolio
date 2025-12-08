import { motion } from 'framer-motion';
import { ArrowRight, Github, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
    const { personal, heroTags } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />

            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 section-container text-center py-32"
            >
                {/* Greeting */}
                <motion.p
                    variants={itemVariants}
                    className="text-[var(--color-text-secondary)] text-lg mb-4"
                >
                    Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    <span className="gradient-text">{personal.name}</span>
                </motion.h1>

                {/* Title */}
                <motion.h2
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto"
                >
                    {personal.title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    {personal.subtitle}
                </motion.p>

                {/* Tags */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {heroTags.map((tag, index) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="tag"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <Mail size={18} />
                        Get in Touch
                        <ArrowRight size={18} />
                    </motion.a>

                    <motion.a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={18} />
                        View GitHub
                    </motion.a>

                    <motion.a
                        href={personal.resumeUrl}
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={18} />
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-[var(--color-border)] rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-3 bg-[var(--color-accent)] rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

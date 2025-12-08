import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
    const { projects } = portfolioData;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="relative z-10 section-container"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="section-title gradient-text">Projects</h2>
                    <p className="section-subtitle mx-auto">
                        Featured work that showcases my skills and impact
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className="group glass-card overflow-hidden glass-card-hover"
                        >
                            {/* Project Image/Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-6xl font-bold text-white/10"
                                >
                                    {project.title.charAt(0)}
                                </motion.div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[var(--color-accent)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileHover={{ scale: 1, opacity: 1 }}
                                        className="text-white flex items-center gap-2 cursor-pointer"
                                    >
                                        <ExternalLink size={24} />
                                        <span className="font-medium">View Project</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)]">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--color-text-secondary)] mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="tag text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Impact Metrics */}
                                {project.impact.length > 0 && (
                                    <div className="space-y-2 pt-4 border-t border-[var(--color-border)]">
                                        {project.impact.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-2 text-sm text-[var(--color-accent)]"
                                            >
                                                <Zap size={14} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="text-xs px-2 py-1 bg-[var(--color-bg-tertiary)] rounded text-[var(--color-text-muted)]"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
    const { experience } = portfolioData;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="py-24 relative">
            <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

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
                    <h2 className="section-title gradient-text">Experience</h2>
                    <p className="section-subtitle mx-auto">
                        My professional journey and contributions
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/50 to-transparent transform md:-translate-x-1/2" />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className={`relative mb-12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: index * 0.2 + 0.3 }}
                                className={`absolute top-0 w-4 h-4 bg-[var(--color-accent)] rounded-full border-4 border-[var(--color-bg-primary)] shadow-lg shadow-[var(--color-accent)]/30 left-0 md:left-1/2 md:-translate-x-1/2`}
                            />

                            {/* Card */}
                            <div className={`glass-card p-6 glass-card-hover ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                {/* Company & Role */}
                                <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                                        <Briefcase size={20} className="text-[var(--color-accent)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-[var(--color-text-primary)]">
                                            {exp.role}
                                        </h3>
                                        <p className="text-[var(--color-accent)]">{exp.company}</p>
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className={`flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                    <Calendar size={14} />
                                    <span>{exp.duration}</span>
                                </div>

                                {/* Description */}
                                <p className="text-[var(--color-text-secondary)] mb-4">
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                    {exp.achievements.slice(0, 3).map((achievement) => (
                                        <li
                                            key={achievement}
                                            className={`flex items-start gap-2 text-sm text-[var(--color-text-muted)] ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                        >
                                            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

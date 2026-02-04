"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Code2, Smartphone, Zap, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    const skills = [
        "Real-time chat systems",
        "Offline-first architectures",
        "Push notifications",
        "In-app purchases & subscriptions",
        "Performance optimization",
        "Cross-platform development"
    ];

    const values = [
        { 
            icon: Code2, 
            title: "Clean Code", 
            desc: "Writing maintainable, reusable components that scale with your product" 
        },
        { 
            icon: Zap, 
            title: "Performance", 
            desc: "Optimizing apps for speed and smooth user experiences" 
        },
        { 
            icon: Users, 
            title: "Collaboration", 
            desc: "Working closely with designers and backend teams to deliver quality" 
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-20">
                {/* Background gradient */}
                <div className="absolute inset-0 -z-10">
                    <motion.div
                        animate={{
                            x: [0, 50, -50, 0],
                            y: [0, -50, 50, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-semibold tracking-wide text-sm md:text-base">ABOUT ME</span>
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Building mobile experiences that users love
                        </h1>

                        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I'm a <strong className="text-foreground">React Native Developer</strong> with 1.5+ years of experience building cross-platform mobile applications for iOS and Android. I work on production apps used by real users, focusing on performance, scalability, and smooth user experiences.
                            </p>
                            <p>
                                My work includes real-time chat systems, offline-first features, push notifications, subscription-based in-app purchases, and performance optimizations for large-scale apps. I enjoy turning complex product requirements into simple and reliable mobile experiences.
                            </p>
                            <p>
                                I like writing clean, maintainable code and building reusable components that make apps easier to scale. Working closely with designers and backend developers has helped me understand how to build features that are both user-friendly and technically solid.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanjha557@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button size="lg">Contact Me</Button>
                            </a>
                            <Link href="https://drive.google.com/file/d/1qNof1f3G_vXFSFSDUCN4yJgNdfXDrc2t/view?usp=sharing" target="_blank">
                                <Button variant="outline" size="lg">View Resume</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Skills Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What I Work With</h2>
                            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {skills.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/5 transition-colors"
                                        >
                                            <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm md:text-base text-foreground/90">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-20 bg-secondary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What I Value</h2>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {values.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10">
                            <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">Open to Opportunities</h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                                Outside of work, I enjoy problem-solving and improving my DSA skills, and I like staying updated with new mobile development trends.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                                I'm actively looking for full-time opportunities where I can contribute to meaningful products and work with teams that care about quality and user experience.
                            </p>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanjha557@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="group">
                                    Contact Me
                                    <Smartphone className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

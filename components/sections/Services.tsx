"use client";

import { motion } from "framer-motion";
import { 
    Monitor, 
    Smartphone, 
    Palette, 
    Globe, 
    Server, 
    Zap 
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const services = [
    {
        title: "Web Development",
        description: "Building responsive, high-performance websites using modern frameworks like Next.js and React.",
        icon: <Globe className="w-8 h-8 text-secondary" />,
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Mobile App Development",
        description: "Creating native and cross-platform mobile applications for iOS and Android using React Native.",
        icon: <Smartphone className="w-8 h-8 text-orange-500" />,
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and visually appeals user interfaces that enhance user experience.",
        icon: <Palette className="w-8 h-8 text-indigo-500" />,
        gradient: "from-indigo-500/20 to-blue-600/20"
    },
    {
        title: "Backend Development",
        description: "Robust server-side solutions with secure API integration and database management.",
        icon: <Server className="w-8 h-8 text-accent" />,
        gradient: "from-teal-500/20 to-emerald-500/20"
    },
    {
        title: "Performance Optimization",
        description: "Optimizing applications for speed, scalability, and better search engine ranking.",
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        gradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
        title: "Desktop Applications",
        description: "Cross-platform desktop applications built with Electron or Tauri for powerful local tooling.",
        icon: <Monitor className="w-8 h-8 text-primary" />,
        gradient: "from-blue-500/20 to-cyan-500/20"
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 -z-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 -z-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <motion.span
                            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            Our Services
                        </motion.span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Tailored solutions to meet your specific business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <TiltCard className="h-full">
                                <div className="glass-card p-8 rounded-2xl group relative overflow-hidden h-full flex flex-col">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="mb-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 w-fit group-hover:bg-white/20 transition-colors backdrop-blur-md">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

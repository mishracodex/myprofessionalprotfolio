"use client";

import { motion } from "framer-motion";
import { 
    Code, 
    Smartphone, 
    Database, 
    Wrench,
    Rocket,
    Terminal
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const skillCategories = [
    {
        title: "Languages",
        description: "Core programming languages I use to build logic and functionality.",
        skills: ["JavaScript", "TypeScript", "C++", "C", "ES6+"],
        icon: <Code className="w-8 h-8 text-secondary" />,
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Mobile & Frontend",
        description: "Crafting engaging cross-platform mobile applications.",
        skills: ["React Native", "Cross-Platform", "iOS & Android", "Redux", "Redux Toolkit", "REST APIs"],
        icon: <Smartphone className="w-8 h-8 text-orange-500" />,
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Databases & Performance",
        description: "Ensuring offline capability, real-time updates, and lightning-fast performance.",
        skills: ["Realm DB", "Offline-First", "Socket.io", "Firebase (FCM)", "FlashList", "Performance Optimization", "Memory Optimization"],
        icon: <Database className="w-8 h-8 text-indigo-500" />,
        gradient: "from-indigo-500/20 to-blue-600/20"
    },
    {
        title: "Tools & Platforms",
        description: "Essential tools for development, version control, and debugging.",
        skills: ["Git", "GitHub","JIRA", "Postman", "Android Studio", "Xcode", "Expo", "Scandit SDK"],
        icon: <Wrench className="w-8 h-8 text-accent" />,
        gradient: "from-teal-500/20 to-emerald-500/20"
    },
    {
        title: "App Deployment",
        description: "Managing the complete lifecycle from testing to production release.",
        skills: ["Play Store", "TestFlight", "App Versioning", "Deep Linking", "Crashlytics", "Release Management"],
        icon: <Rocket className="w-8 h-8 text-primary" />,
        gradient: "from-blue-500/20 to-cyan-500/20"
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

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
                            Technical Skills
                        </motion.span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        My expertise spans across mobile development ecosystems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
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
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="mb-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 w-fit group-hover:bg-white/20 transition-colors backdrop-blur-md">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-6 group-hover:text-foreground/80 transition-colors">
                                            {category.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {category.skills.map((skill, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
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

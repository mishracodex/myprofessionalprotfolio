"use client";

import { motion } from "framer-motion";

const companies = [
    "TechStart", "GlobalCorp", "InnovateX", "DevStudio", "CreativeLabs", "FutureSystems"
];

export function Trust() {
    return (
        <section className="py-20 border-y border-foreground/5 bg-foreground/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Trusted by innovative companies worldwide
                </p>
            </div>

            <div className="flex relative overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 hover:w-32 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap min-w-full"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {[...companies, ...companies, ...companies].map((company, i) => (
                        <span key={i} className="text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default">
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

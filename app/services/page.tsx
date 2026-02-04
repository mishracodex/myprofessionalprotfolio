"use client";

import { Services } from "@/components/sections/Services";
import { Skills as TechStack } from "@/components/sections/Skills";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="pt-24 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6 text-center mb-24 relative"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
                
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                    Building the <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Digital Future
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    We combine cutting-edge technology with premium design to deliver exceptional digital experiences that scale.
                </p>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex justify-center gap-4"
                >
                    <a href="#services" className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                        Our Services
                    </a>
                </motion.div>
            </motion.div>

            <Services />
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="my-10"
            >
              <TechStack />
            </motion.div>

        </div>
    );
}

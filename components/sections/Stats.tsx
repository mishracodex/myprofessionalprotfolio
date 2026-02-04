"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "40+" },
    { label: "Awards Won", value: "3" },
];

export function Stats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-800">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                        {stat.value}
                    </h3>
                    <p className="text-slate-400 text-sm uppercase tracking-wider">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}

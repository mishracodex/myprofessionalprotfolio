"use client";

import { motion } from "framer-motion";
export function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold">
                        <motion.span
                            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            Aryan
                        </motion.span>
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                        Software Engineer & UI/UX Enthusiast
                    </p>
                </div>
                <div className="flex gap-6 text-sm text-slate-400">
                    <a href="https://www.linkedin.com/in/aryan--jha/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                </div>
                <div className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Aryan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

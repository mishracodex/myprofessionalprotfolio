"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { apps, webProjects } from "@/lib/data";

export function Portfolio() {
    // Only use mobile apps as requested
    const projects = apps;
    const companyName = "CodingWorkx";

    return (
        <section id="work" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <motion.span
                            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            Featured Work
                        </motion.span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Key projects delivered during my working tenure at
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central/Left Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 md:block hidden" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 md:hidden block" />

                    {/* Company Node at Top */}
                    <div className="relative flex justify-center mb-16 md:mb-24">
                        <div className="relative z-10 bg-background/95 backdrop-blur-md border border-primary/20 rounded-full pl-3 md:pl-6 pr-4 md:pr-8 py-2 md:py-3 shadow-xl shadow-primary/5 flex items-center gap-2 md:gap-4 group hover:border-primary/40 transition-all duration-300">
                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-primary"></span>
                                </span>
                                <span className="font-bold text-sm md:text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:text-primary transition-colors">{companyName}</span>
                            </div>
                            <div className="w-px h-4 md:h-5 bg-border/60" />
                            <span className="text-xs md:text-sm font-medium text-muted-foreground/80 whitespace-nowrap group-hover:text-primary/80 transition-colors">
                                Sept 2024 - Present
                            </span>
                        </div>
                    </div>

                    {/* Mobile View - Stacked Cards */}
                    <div className="md:hidden space-y-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col gap-6"
                            >
                                <Link 
                                    href={`/work/${project.slug}`}
                                    className="block group relative overflow-hidden rounded-3xl border border-white/10 shadow-lg"
                                >
                                    <div className="aspect-video w-full overflow-hidden bg-secondary/10 relative">
                                        {/* Blurred background glow - optimized */}
                                        <div className="absolute inset-0 -z-10">
                                            <Image
                                                src={project.coverImage}
                                                alt=""
                                                fill
                                                className="object-cover blur-3xl opacity-60 scale-125"
                                                quality={20}
                                                aria-hidden="true"
                                            />
                                        </div>
                                        {/* Main image */}
                                        <Image
                                            src={project.coverImage}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="relative object-cover transition-transform duration-500 group-hover:scale-105"
                                            quality={85}
                                        />
                                        {/* Overlay Badge */}
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="px-3 py-1 text-xs font-bold bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/5">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                                            {project.title}
                                            <ArrowRight className="w-4 h-4 text-primary -rotate-45" />
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop View - Timeline Graph */}
                    <div className="hidden md:block space-y-24">
                        {projects.map((project, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div 
                                    key={project.slug}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex flex-row gap-20 justify-center items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    {/* Timeline Node - Desktop Only */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-20 top-1/2 -translate-y-1/2">
                                        <div className="absolute inset-0 m-1 rounded-full bg-primary" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-[calc(50%-40px)]`}>
                                        <div className={`glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 group-hover:translate-x-2 ${!isEven ? 'group-hover:-translate-x-2' : ''}`}>
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                                    {project.description}
                                                </p>
                                                
                                                <Link 
                                                    href={`/work/${project.slug}`}
                                                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    View Project 
                                                    <ArrowRight className="w-4 h-4 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Card */}
                                    <div className={`w-[calc(50%-40px)]`}>
                                        <Link href={`/work/${project.slug}`} className="block group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                                            <div className="relative aspect-[4/3] overflow-hidden bg-secondary/10">
                                                {/* Blurred background glow - optimized */}
                                                <div className="absolute inset-0 -z-10">
                                                    <Image
                                                        src={project.coverImage}
                                                        alt=""
                                                        fill
                                                        className="object-cover blur-[100px] opacity-50 scale-150"
                                                        quality={15}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                {/* Main image */}
                                                <Image
                                                    src={project.coverImage}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 40vw"
                                                    className="relative object-cover transition-transform duration-500 group-hover:scale-105"
                                                    quality={85}
                                                />
                                                
                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
                                                        View Project
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Connector Lines */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-[40px] h-px bg-gradient-to-r from-primary/50 to-transparent left-1/2 ${isEven ? 'translate-x-0' : '-translate-x-[40px] rotate-180'}`} />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* End Node */}
                     <div className="relative flex justify-center mt-24">
                        <div className="w-3 h-3 rounded-full bg-border" />
                    </div>
                </div>
            </div>
        </section>
    );
}

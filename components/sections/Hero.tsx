"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, ExternalLink, Mail } from "lucide-react";
import { useLoading } from "@/components/layout/LoadingContext";
import Image from "next/image";
import profilePic from "@/app/images/profilePicture/profile.png";
import typescriptIcon from "@/app/images/asteroids/typescript.png";
import reactNativeIcon from "@/app/images/asteroids/reactNative.png";
import firebaseIcon from "@/app/images/asteroids/firebase.png";
import javascriptIcon from "@/app/images/asteroids/javascript.png";
import reduxIcon from "@/app/images/asteroids/redux.png";
import restIcon from "@/app/images/asteroids/rest.png";

export function Hero() {
    const { isLoadingComplete } = useLoading();

    return (
        <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 md:pt-32">
            {/* Background Elements - Optimized CSS Animation */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[80px]"
                    style={{
                        animation: 'var(--animate-float-blob-1)',
                        willChange: 'transform'
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-[80px]"
                    style={{
                        animation: 'var(--animate-float-blob-2)',
                        willChange: 'transform'
                    }}
                />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial="hidden"
                        animate={isLoadingComplete ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2,
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                        className="text-center md:text-left"
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mx-auto md:mx-0"
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Available for new opportunitiessss</span>
                        </motion.div>

                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl text-foreground">
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15
                                        }
                                    }
                                }}
                            >
                                Crafting{" "}
                            </motion.span>
                            <span className="relative inline-block">
                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0, y: 20, scale: 0.9 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15,
                                                delay: 0.1
                                            }
                                        }
                                    }}
                                    className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                >
                                    Seamless Mobile Experiences
                                </motion.span>
                            </span>
                        </h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mb-8 text-lg text-muted-foreground md:text-xl max-w-lg mx-auto md:mx-0"
                        >
                            React Native Developer with 1.5+ years of experience crafting cross-platform iOS and Android apps used by real users. I specialize in building scalable, high-performance mobile applications with real-time features, offline support, and seamless user experiences.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                        >
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanjha557@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="group">
                                    Email Me
                                    <Mail className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href="https://drive.google.com/file/d/1qNof1f3G_vXFSFSDUCN4yJgNdfXDrc2t/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">
                                    Resume
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Profile Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={isLoadingComplete ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex justify-center md:justify-end relative px-6 md:px-0"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            {/* Organic Blob Background */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isLoadingComplete ? {
                                    rotate: [0, 360],
                                    scale: [1.05, 1, 1.05]
                                } : { scale: 0, rotate: -180 }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: {
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    delay: 0.5
                                }}
                                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl -z-10"
                            />

                            {/* Image Container */}
                            <motion.div
                                initial={{ scale: 0, rotate: -90 }}
                                animate={isLoadingComplete ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 12,
                                    delay: 0.6
                                }}
                                className="w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden relative bg-muted flex items-center justify-center"
                            >
                                <Image
                                    src={profilePic}
                                    alt="Aryan Jha - React Native Developer"
                                    fill
                                    sizes="(max-width: 768px) 256px, 384px"
                                    className="object-cover"
                                    priority
                                    quality={90}
                                />
                            </motion.div>

                            {/* Floating Tech Badges - Evenly Spaced Hexagon with Falling Animation */}

                            {/* Top Center - TypeScript */}
                            <motion.div
                                initial={{ y: -200, opacity: 0, rotate: -180 }}
                                animate={isLoadingComplete ? {
                                    y: [0, -10, 0],
                                    opacity: 1,
                                    rotate: 0
                                } : { y: -200, opacity: 0, rotate: -180 }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 },
                                    opacity: { duration: 0.4, delay: 0.6 },
                                    rotate: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.6
                                    }
                                }}
                                className="absolute md:-top-12 left-1/2 -translate-x-1/2 md:w-12 md:h-12 bg-background rounded-xl shadow-lg border border-border/50 hidden md:flex items-center justify-center overflow-hidden p-2"
                            >
                                <Image
                                    src={typescriptIcon}
                                    alt="TypeScript"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Top Right - React Native */}
                            <motion.div
                                initial={{ y: -250, x: 100, opacity: 0, rotate: 180 }}
                                animate={isLoadingComplete ? {
                                    y: [0, -8, 0],
                                    x: 0,
                                    opacity: 1,
                                    rotate: 0
                                } : { y: -250, x: 100, opacity: 0, rotate: 180 }}
                                transition={{
                                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
                                    x: { type: "spring", stiffness: 80, damping: 12, delay: 0.7 },
                                    opacity: { duration: 0.4, delay: 0.7 },
                                    rotate: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 12,
                                        delay: 0.7
                                    }
                                }}
                                className="absolute md:top-8 md:-right-12 md:w-16 md:h-16 bg-background rounded-2xl shadow-xl border border-border/50 hidden md:flex items-center justify-center overflow-hidden p-2"
                            >
                                <Image
                                    src={reactNativeIcon}
                                    alt="React Native"
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Bottom Right - Firebase */}
                            <motion.div
                                initial={{ y: -220, x: 80, opacity: 0, rotate: -90 }}
                                animate={isLoadingComplete ? {
                                    y: [0, 8, 0],
                                    x: 0,
                                    opacity: 1,
                                    rotate: 0
                                } : { y: -220, x: 80, opacity: 0, rotate: -90 }}
                                transition={{
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                    x: { type: "spring", stiffness: 90, damping: 11, delay: 0.8 },
                                    opacity: { duration: 0.4, delay: 0.8 },
                                    rotate: {
                                        type: "spring",
                                        stiffness: 110,
                                        damping: 11,
                                        delay: 0.8
                                    }
                                }}
                                className="absolute md:bottom-8 md:-right-12 md:w-14 md:h-14 bg-background rounded-2xl shadow-xl border border-border/50 hidden md:flex items-center justify-center overflow-hidden p-2"
                            >
                                <Image
                                    src={firebaseIcon}
                                    alt="Firebase"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Bottom Center - JavaScript */}
                            <motion.div
                                initial={{ y: -180, opacity: 0, rotate: 270 }}
                                animate={isLoadingComplete ? {
                                    y: [0, 10, 0],
                                    opacity: 1,
                                    rotate: 0
                                } : { y: -180, opacity: 0, rotate: 270 }}
                                transition={{
                                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                                    opacity: { duration: 0.4, delay: 0.9 },
                                    rotate: {
                                        type: "spring",
                                        stiffness: 105,
                                        damping: 10,
                                        delay: 0.9
                                    }
                                }}
                                className="absolute md:-bottom-12 left-1/2 -translate-x-1/2 md:w-14 md:h-14 bg-background rounded-2xl shadow-xl border border-border/50 hidden md:flex items-center justify-center overflow-hidden p-2"
                            >
                                <Image
                                    src={javascriptIcon}
                                    alt="JavaScript"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Bottom Left - Redux */}
                            <motion.div
                                initial={{ y: -240, x: -100, opacity: 0, rotate: 135 }}
                                animate={isLoadingComplete ? {
                                    y: [0, -8, 0],
                                    x: 0,
                                    opacity: 1,
                                    rotate: 0
                                } : { y: -240, x: -100, opacity: 0, rotate: 135 }}
                                transition={{
                                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                                    x: { type: "spring", stiffness: 85, damping: 12, delay: 1.0 },
                                    opacity: { duration: 0.4, delay: 1.0 },
                                    rotate: {
                                        type: "spring",
                                        stiffness: 115,
                                        damping: 11,
                                        delay: 1.0
                                    }
                                }}
                                className="absolute md:bottom-8 md:-left-12 md:w-14 md:h-14 bg-background rounded-2xl shadow-xl border border-border/50 hidden md:flex items-center justify-center overflow-hidden p-2"
                            >
                                <Image
                                    src={reduxIcon}
                                    alt="Redux"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Top Left - REST */}
                            <motion.div
                                initial={{ y: -210, x: -90, opacity: 0, rotate: -135 }}
                                animate={isLoadingComplete ? {
                                    y: [0, 8, 0],
                                    x: 0,
                                    opacity: 1,
                                    rotate: 0
                                } : { y: -210, x: -90, opacity: 0, rotate: -135 }}
                                transition={{
                                    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                                    x: { type: "spring", stiffness: 95, damping: 11, delay: 1.1 },
                                    opacity: { duration: 0.4, delay: 1.1 },
                                    rotate: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 12,
                                        delay: 1.1
                                    }
                                }}
                                className="absolute md:top-8 md:-left-12 md:w-12 md:h-12 bg-background rounded-xl shadow-lg border border-border/50 hidden md:flex items-center justify-center overflow-hidden p-2"
                            >
                                <Image
                                    src={restIcon}
                                    alt="REST API"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


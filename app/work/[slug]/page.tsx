"use client";

import { apps } from "@/lib/data";
import { Carousel } from "@/components/ui/Carousel";
import { TechStackList } from "@/components/ui/TechStackList";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Download, Smartphone, X, Info } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Correct type definition for Next.js 15+ Params
type Props = {
    params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: Props) {
    // Unwrap the params Promise - In Next.js 15+, params is a Promise
    const unwrappedParams = React.use(params);
    const app = apps.find((a) => a.slug === unwrappedParams.slug);

    const [showModal, setShowModal] = React.useState(false);
    const [modalStore, setModalStore] = React.useState<'ios' | 'android'>('ios');

    if (!app) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background w-full">
            {/* Immersive Hero Header */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${app.coverImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/30" />

                <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-12 md:pb-20 relative z-10">
                    <Link href="/#work" className="inline-flex items-center text-white/80 hover:text-primary transition-colors mb-6 md:mb-8 w-fit bg-black/20 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/10 text-sm md:text-base">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
                    </Link>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white text-shadow-lg break-words">
                        {app.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-6 md:mb-8">
                        {app.tags.map(tag => (
                            <span key={tag} className="px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {app.unpublished ? (
                            <>
                                <button
                                    onClick={() => {
                                        setModalStore('ios');
                                        setShowModal(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm md:text-base font-medium bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90 transition-colors cursor-pointer"
                                >
                                    <span className="text-xl"></span> App Store
                                </button>
                                <button
                                    onClick={() => {
                                        setModalStore('android');
                                        setShowModal(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm md:text-base font-medium border border-primary/30 bg-transparent hover:bg-primary/10 transition-colors cursor-pointer"
                                >
                                    <span className="text-xl"></span> Play Storeee
                                </button>
                            </>
                        ) : (
                            <>
                                {app.ios && (
                                    <Link href={app.ios} target="_blank">
                                        <Button size="lg" className="gap-2 shadow-xl shadow-primary/20 text-sm md:text-base">
                                            <span className="text-xl"></span> App Store
                                        </Button>
                                    </Link>
                                )}
                                {app.android && (
                                    <Link href={app.android} target="_blank">
                                        <Button variant="outline" size="lg" className="gap-2 border-primary/30 text-sm md:text-base">
                                            <span className="text-xl"></span> Play Store
                                        </Button>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 -mt-10 relative z-20">
                    <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12 md:space-y-16 min-w-0">
                            {/* Overview */}
                            <section className="w-full">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                                    <span className="w-1 h-6 md:h-8 bg-primary rounded-full flex-shrink-0" />
                                    <span className="break-words">Project Overview</span>
                                </h2>
                                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed break-words">
                                    {app.longDescription}
                                </p>
                            </section>

                            {/* Screenshots */}
                            <section className="w-full overflow-x-hidden">
                                <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                                    <span className="w-1 h-6 md:h-8 bg-primary rounded-full flex-shrink-0" />
                                    <span className="break-words">App Gallery</span>
                                </h2>
                                <div className="overflow-x-hidden">
                                    <Carousel images={app.screenshots} />
                                </div>
                            </section>

                            {/* Key Contributions */}
                            <section className="w-full">
                                <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                                    <span className="w-1 h-6 md:h-8 bg-primary rounded-full flex-shrink-0" />
                                    <span className="break-words">Key Contributions</span>
                                </h2>
                                <div className="grid gap-4 md:gap-6">
                                    {app.features.map((feature, i) => (
                                        <div key={i} className="group flex gap-3 md:gap-5 p-4 md:p-6 rounded-2xl bg-secondary/5 border border-white/5 hover:border-primary/20 hover:bg-secondary/10 transition-all duration-300 min-w-0">
                                            <div className="mt-1 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-medium break-words">
                                                    {feature}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8 md:space-y-10">
                            {/* Tech Stack */}
                            <div className="glass-card p-6 md:p-8 rounded-3xl sticky top-24 border border-white/10">
                                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 border-b border-white/10 pb-4">Technologies</h3>
                                <TechStackList techStack={app.techStack} />

                                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
                                    <h3 className="text-lg md:text-xl font-bold mb-4">Project Info</h3>
                                    <dl className="space-y-3 md:space-y-4">
                                        <div>
                                            <dt className="text-xs md:text-sm text-muted-foreground mb-1">Role</dt>
                                            <dd className="font-medium text-sm md:text-base">Software Engineer</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs md:text-sm text-muted-foreground mb-1">Company</dt>
                                            <dd className="font-medium text-primary text-sm md:text-base">
                                                <Link href="https://in.linkedin.com/company/codingworkx" target="_blank" className="hover:underline break-words">
                                                    {(app as any).company || 'CodingWorkx'}
                                                </Link>
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs md:text-sm text-muted-foreground mb-1">Platform</dt>
                                            <dd className="font-medium text-sm md:text-base">iOS & Android</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Modal for Unpublished App */}
            <AnimatePresence>
                {showModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="glass-card max-w-md w-full p-6 md:p-8 rounded-2xl border border-primary/20 shadow-2xl">
                                {/* Close button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>

                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full bg-primary/20">
                                        <Info className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-bold text-center mb-3">
                                    App Currently Unpublished
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed mb-6">
                                    This app is not currently available on the {modalStore === 'ios' ? 'App Store' : 'Play Store'}.
                                    The link will be updated as soon as the app is published.
                                </p>

                                {/* Close button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Got it
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

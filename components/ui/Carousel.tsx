"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    images: string[];
}

export function Carousel({ images }: CarouselProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const [zoomLevel, setZoomLevel] = React.useState(1);

    const scrollToSlide = (index: number) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            const maxScrollLeft = scrollWidth - clientWidth;
            
            // Proportional scrolling: 0 maps to 0, last index maps to maxScrollLeft
            const targetLeft = maxScrollLeft > 0 && images.length > 1
                ? (index / (images.length - 1)) * maxScrollLeft
                : 0;

            container.scrollTo({
                left: targetLeft,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            const maxScrollLeft = scrollWidth - clientWidth;
            
            // Calculate index based on scroll progress (0 to 1)
            if (maxScrollLeft > 0 && images.length > 1) {
                const progress = scrollLeft / maxScrollLeft;
                const newIndex = Math.round(progress * (images.length - 1));
                setCurrentSlide(Math.min(Math.max(newIndex, 0), images.length - 1));
            }
        }
    };

    // Auto-scroll effect
    React.useEffect(() => {
        if (isPaused || images.length <= 1) return;

        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % images.length;
            scrollToSlide(nextSlide);
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(interval);
    }, [currentSlide, isPaused, images.length]);

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    // Navigate lightbox images
    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage) {
            const currentIndex = images.indexOf(selectedImage);
            const nextIndex = (currentIndex + 1) % images.length;
            setSelectedImage(images[nextIndex]);
            setZoomLevel(1);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage) {
            const currentIndex = images.indexOf(selectedImage);
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            setSelectedImage(images[prevIndex]);
            setZoomLevel(1);
        }
    };

    // Handle Keyboard Navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
                setZoomLevel(1);
            } else if (e.key === "ArrowRight") {
                handleNext();
            } else if (e.key === "ArrowLeft") {
                handlePrev();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage]);

    // Hide navbar on mobile when modal is open
    React.useEffect(() => {
        if (selectedImage) {
            document.body.classList.add("carousel-modal-open");
        } else {
            document.body.classList.remove("carousel-modal-open");
        }
        return () => {
            document.body.classList.remove("carousel-modal-open");
        };
    }, [selectedImage]);

    return (
        <div 
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            {/* Left Navigation Arrow (Inline) */}
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors z-40 hidden md:block backdrop-blur-sm border border-white/10"
                onClick={handleScrollLeft}
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Navigation Arrow (Inline) */}
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors z-40 hidden md:block backdrop-blur-sm border border-white/10"
                onClick={handleScrollRight}
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-none snap-center first:pl-0 last:pr-0"
                    >
                        <div 
                            className="relative w-[280px] h-[500px] md:w-[320px] md:h-[580px] rounded-3xl overflow-hidden border-8 border-slate-900 shadow-2xl bg-slate-800 cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                            onClick={() => setSelectedImage(src)}
                        >
                            {/* Phone Notch/Bezel decoration */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-20" />
                            
                            {/* Hover Overlay with Zoom Icon */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-30 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 drop-shadow-lg" />
                            </div>

                            <img
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-4">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToSlide(i)}
                        className={`transition-all duration-300 rounded-full ${
                            currentSlide === i 
                                ? "w-8 h-2 bg-primary shadow-lg shadow-primary/50" 
                                : "w-2 h-2 bg-slate-700 hover:bg-slate-500"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
                        onClick={() => {
                            setSelectedImage(null);
                            setZoomLevel(1);
                        }}
                    >
                        <button 
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-sm border border-white/10"
                            onClick={() => {
                                setSelectedImage(null);
                                setZoomLevel(1);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        {/* Left Navigation Arrow */}
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-sm"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        {/* Right Navigation Arrow */}
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-sm"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                        
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
                                }}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <Minus className="w-6 h-6" />
                            </button>
                            <span className="text-white font-medium min-w-[3ch] text-center">{Math.round(zoomLevel * 100)}%</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setZoomLevel(prev => Math.min(prev + 0.5, 3));
                                }}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <Plus className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <motion.div
                            ref={containerRef}
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-full max-h-full aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900/50 bg-black/50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                src={selectedImage}
                                alt="Fullscreen Screenshot"
                                className="w-auto h-full max-h-[90vh] object-contain rounded-lg cursor-grab active:cursor-grabbing"
                                animate={{ scale: zoomLevel }}
                                drag
                                dragConstraints={containerRef}
                                dragElastic={0.2}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

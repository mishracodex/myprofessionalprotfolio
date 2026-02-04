"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TechStackListProps {
    techStack: string[];
}

export function TechStackList({ techStack }: TechStackListProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Filter and sort to ensure React Native is first if present, mirroring original layout logic
    // or just use the list as provided? The original code enforced React Native first.
    // Let's reorganize the list so React Native is first, then the rest.
    const sortedStack = [
        ...techStack.filter(t => t === "React Native"),
        ...techStack.filter(t => t !== "React Native")
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sortedStack.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, [sortedStack.length]);

    return (
        <div className="flex flex-wrap gap-3">
            {sortedStack.map((tech, index) => {
                const isActive = index === activeIndex;

                return (
                    <div
                        key={tech}
                        className={cn(
                            "relative rounded-lg p-[1px] transition-all duration-300 overflow-hidden",
                            isActive ? "scale-105" : "scale-100"
                        )}
                    >
                        {/* Animated Gradient Border Layer (Visible only when active) */}
                        <div
                            className={cn(
                                "absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]",
                                isActive ? "opacity-100 animate-border-flow" : "opacity-0"
                            )}
                        />

                        {/* Content Container */}
                        <div className={cn(
                            "relative px-4 py-2 rounded-lg text-sm font-medium h-full w-full flex items-center justify-center bg-background border",
                             isActive 
                                ? "text-foreground border-transparent" // Border handled by outer div
                                : "text-muted-foreground border-white/10 bg-white/5"
                        )}>
                            {tech}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

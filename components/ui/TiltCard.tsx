"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };

export const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useMotionValue(0), SPRING_CONFIG);
    const rotateY = useSpring(useMotionValue(0), SPRING_CONFIG);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        rotateX.set(yPct * -20); // Tilt amount
        rotateY.set(xPct * 20);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={className}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full transition-all duration-200"
            >
                {children}

                {/* Glare Effect */}
                <motion.div
                    style={{
                        background: useMotionTemplate`radial-gradient(
              400px circle at ${useSpring(useMotionValue(0), SPRING_CONFIG)}px ${useSpring(
                            useMotionValue(0),
                            SPRING_CONFIG
                        )}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )`,
                    }}
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
            </div>
        </motion.div>
    );
};

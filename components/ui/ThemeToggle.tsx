"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0" />;
    }

    const isDark = theme === "dark";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-accent/10 border border-foreground/10 transition-colors"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-full h-full flex items-center justify-center p-2"
            >
                {/* Sun Icon */}
                <motion.div
                    animate={{ scale: isDark ? 0 : 1, opacity: isDark ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun className="h-5 w-5 text-orange-500 fill-orange-500/20" />
                </motion.div>

                {/* Moon Icon */}
                <motion.div
                    animate={{ scale: isDark ? 1 : 0, opacity: isDark ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon className="h-5 w-5 text-blue-500 fill-blue-500/20" />
                </motion.div>
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

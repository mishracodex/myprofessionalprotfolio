"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();
    const [activeHash, setActiveHash] = React.useState("");

    const [activeSection, setActiveSection] = React.useState("home");

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px", // Trigger exactly when section crosses center
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ["home", "skills", "work"];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, [pathname]); // Re-run if path changes (though usually component unmounts/remounts)

    const handleLinkClick = (href: string) => {
        setIsOpen(false);
        // Let observer handle active state update on scroll
        // But for hash links, we might want to manually set it momentarily or rely on scroll
    };

    const navLinks = [
        { name: "Home", href: "/#home" }, // Changed to anchor for scroll
        { name: "Skills", href: "/#skills" }, // Changed to anchor for scroll spy behavior on home
        { name: "Work", href: "/#work" },
        { name: "About", href: "/about" },
    ];

    const isActive = (href: string) => {
        // If we are not on home page, fallback to simple pathname match
        if (pathname !== "/") {
            return pathname === href;
        }

        // On home page, use activeSection from intersection observer
        if (href.includes("#")) {
            const sectionId = href.split("#")[1];
            return activeSection === sectionId;
        }

        return false;
    };

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass py-4" : "py-6 bg-transparent",
                // Hide navbar when carousel modal is open (both mobile and desktop)
                "[body.carousel-modal-open_&]:hidden"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-2xl font-bold"
                    onClick={() => handleLinkClick("/")}
                >
                    <motion.span
                        className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        Rajan's Portfolio
                    </motion.span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors relative",
                                isActive(link.href)
                                    ? "text-primary font-semibold"
                                    : "text-foreground/80 hover:text-primary"
                            )}
                            onClick={() => handleLinkClick(link.href)}
                        >
                            {link.name}
                            {isActive(link.href) && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </Link>
                    ))}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajan20julymishra@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button size="sm">Contact Me</Button>
                    </a>
                    {/* <ThemeToggle /> */}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    {/* <ThemeToggle /> */}
                    <button
                        className="text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 right-0 glass-card p-6 m-4 mt-2 rounded-2xl flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-lg font-medium transition-colors",
                                isActive(link.href)
                                    ? "text-primary"
                                    : "text-foreground/80 hover:text-primary"
                            )}
                            onClick={() => handleLinkClick(link.href)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajan20julymishra@gmail.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                        <Button className="w-full">Contact Me</Button>
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
}

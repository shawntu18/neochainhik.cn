"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "glass border-white/10 py-4" : "bg-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-32 h-10">
                        <Image
                            src="/logo.png"
                            alt="NeoChain Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight text-white">
                        NeoChain <span className="text-slate-400 font-light">杻启元</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {["Solutions", "Platform", "Company", "Resources"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                        Log In
                    </Button>
                    <Button size="sm">Get Started</Button>
                </div>
            </div>
        </motion.header>
    );
}

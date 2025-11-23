"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    delay?: number;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, delay = 0, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-20 md:py-32 relative", className)}
                {...props}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };

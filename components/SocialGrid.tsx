"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface SocialLink {
    icon: ReactNode;
    href: string;
    label: string;
}

interface SocialGridProps {
    links: SocialLink[];
}

export function SocialGrid({ links }: SocialGridProps) {
    return (
        <div className="grid grid-cols-4 gap-3 mt-8 w-full">
            {links.map((link, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href={link.href}
                        aria-label={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-panel flex items-center justify-center aspect-square rounded-2xl hover:bg-[var(--card-hover)] transition-colors relative overflow-hidden"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        {link.icon}
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

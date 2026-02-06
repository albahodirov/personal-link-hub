"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkCardProps {
    title: string;
    href: string;
    icon: ReactNode;
    index: number;
    onClick?: () => void;
}

export function LinkCard({ title, href, icon, index, onClick, download }: LinkCardProps & { download?: boolean }) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    const isExternal = href.startsWith("http") || href.startsWith("//");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <Link
                href={href}
                onClick={handleClick}
                className="glass-panel group flex items-center justify-between p-4 rounded-2xl w-full mb-3 hover:bg-[var(--card-hover)] transition-colors"
                target={onClick ? undefined : (isExternal || download ? "_blank" : undefined)}
                rel={onClick ? undefined : (isExternal || download ? "noopener noreferrer" : undefined)}
                download={download}
            >
                <div className="flex items-center gap-4">
                    <div className="transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        {icon}
                    </div>
                    <span className="font-medium transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {title}
                    </span>
                </div>
                {!onClick && (
                    <ArrowUpRight
                        className="w-4 h-4 transition-colors"
                        style={{ color: 'var(--text-secondary)' }}
                    />
                )}
            </Link>
        </motion.div>
    );
}

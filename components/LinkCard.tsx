"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkCardProps {
    title: string;
    href: string;
    icon: ReactNode;
    index: number;
    onClick?: () => void;
    download?: boolean;
}

export function LinkCard({ title, href, icon, index, onClick, download }: LinkCardProps) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick && !download) {
            e.preventDefault();
            onClick();
        }
    };

    const isExternal = href.startsWith("http") || href.startsWith("//");

    const content = (
        <div className="glass-panel group flex items-center justify-between p-4 rounded-2xl w-full mb-3 hover:bg-[var(--card-hover)] transition-colors">
            <div className="flex items-center gap-4">
                <div className="transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {icon}
                </div>
                <span className="font-medium transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {title}
                </span>
            </div>
            {download ? (
                <Download
                    className="w-4 h-4 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                />
            ) : !onClick && (
                <ArrowUpRight
                    className="w-4 h-4 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                />
            )}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {download ? (
                <a
                    href={href}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClick}
                    className="block w-full"
                >
                    {content}
                </a>
            ) : (
                <Link
                    href={href}
                    onClick={handleClick}
                    className="block w-full"
                    target={onClick ? undefined : (isExternal ? "_blank" : undefined)}
                    rel={onClick ? undefined : (isExternal ? "noopener noreferrer" : undefined)}
                >
                    {content}
                </Link>
            )}
        </motion.div>
    );
}

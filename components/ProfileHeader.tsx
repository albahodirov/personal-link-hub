"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileHeaderProps {
    name: string;
    bio: string;
    imageUrl: string;
}

export function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col items-center text-center mb-10 relative z-10">
            <div className="relative mb-6">
                <motion.div
                    className="absolute inset-0 rounded-full bg-current opacity-20 blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ color: 'var(--text-primary)' }}
                />
                {/* Increased size from w-24 (96px) to w-32 (128px) */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--glass-border)] ring-4 ring-[var(--glass-bg)]">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-2 tracking-tight"
                style={{ color: 'var(--text-primary)' }}
            >
                {name}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm max-w-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
            >
                {bio}
            </motion.p>
        </div>
    );
}

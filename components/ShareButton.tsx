"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export function ShareButton() {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Alisher Bahodirov',
                    text: 'Check out this profile!',
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied!");
            } catch (err) {
                toast.error("Failed to copy link");
            }
        }
    };

    // Note: Position is relative to the container now if we want it next to theme switch, 
    // but user asked for "Share buttoni yonidan Light/Dark theme switch", 
    // so we will group them in the main page layout instead of fixed positioning here.
    // I'll make this a simple button component without fixed positioning.

    return (
        <motion.button
            onClick={handleShare}
            className="p-2 rounded-full glass-panel hover:bg-[var(--card-hover)] transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Share profile"
            style={{ color: 'var(--text-primary)' }}
        >
            <Share2 size={20} />
        </motion.button>
    );
}

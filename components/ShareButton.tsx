"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export function ShareButton({ shareText, shareUrl }: { shareText: string; shareUrl: string }) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Alisher Bahodirov',
                    text: shareText,
                    url: shareUrl,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(`${shareUrl} ${shareText}`);
                toast.success("Link copied!");
            } catch (err) {
                toast.error("Failed to copy link");
            }
        }
    };

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

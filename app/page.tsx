"use client";

import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkCard } from "@/components/LinkCard";
import { SocialGrid } from "@/components/SocialGrid";
import { ShareButton } from "@/components/ShareButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, Globe, FileText, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Image from "next/image";

const LINKS = [
    {
        title: "Official Website",
        href: "#",
        icon: <Globe size={20} />,
        action: () => toast.info("Coming Soon"),
    },
    {
        title: "Resume",
        href: "#",
        icon: <FileText size={20} />,
        action: () => toast.info("Coming Soon"),
    },
    {
        title: "Latest Project",
        href: "https://github.com/albahodirov",
        icon: <Github size={20} />,
    },
    {
        title: "Book a Call",
        href: "mailto:albahodirov@gmail.com",
        icon: <Smartphone size={20} />,
    },
];

const SOCIALS = [
    {
        // Instagram
        icon: (
            <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                    src="/icon-instagram.png"
                    alt="Instagram"
                    fill
                    className="object-contain invert [.light_&]:invert-0 transition-[filter]"
                />
            </div>
        ),
        href: "https://www.instagram.com/albahodirov",
        label: "Instagram",
    },
    {
        // Telegram
        icon: (
            <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                    src="/icon-telegram.png"
                    alt="Telegram"
                    fill
                    className="object-contain invert [.light_&]:invert-0 transition-[filter]"
                />
            </div>
        ),
        href: "https://t.me/albahodirov",
        label: "Telegram",
    },
    {
        // LinkedIn
        icon: (
            <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                    src="/icon-linkedin.png"
                    alt="LinkedIn"
                    fill
                    className="object-contain invert [.light_&]:invert-0 transition-[filter]"
                />
            </div>
        ),
        href: "https://www.linkedin.com/in/albahodirov/",
        label: "LinkedIn",
    },
    {
        // Medium
        icon: (
            <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                    src="/icon-medium.png"
                    alt="Medium"
                    fill
                    className="object-contain invert [.light_&]:invert-0 transition-[filter]"
                />
            </div>
        ),
        href: "https://medium.com/@albahodirov",
        label: "Medium",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden transition-colors duration-500">
            {/* Background Gradient Spot */}
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-current rounded-full blur-[120px] pointer-events-none opacity-5" style={{ color: 'var(--foreground-rgb)' }} />
            <div className="fixed bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-current rounded-full blur-[100px] pointer-events-none opacity-5" style={{ color: 'var(--foreground-rgb)' }} />

            {/* Top Controls */}
            <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
                <ShareButton />
                <ThemeToggle />
            </div>

            <div className="w-full max-w-md z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <ProfileHeader
                        name="Alisher Bahodirov"
                        bio="Building the next generation of mobile apps with Flutter"
                        imageUrl="/profile.jpg"
                    />

                    <div className="w-full space-y-4">
                        {LINKS.map((link, i) => (
                            <LinkCard
                                key={i}
                                index={i}
                                title={link.title}
                                href={link.href}
                                icon={link.icon}
                                onClick={link.action}
                            />
                        ))}
                    </div>

                    <SocialGrid links={SOCIALS} />
                </motion.div>

                <footer
                    className="mt-12 text-sm font-mono transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    © {new Date().getFullYear()} Alisher Bahodirov
                </footer>
            </div>
        </main>
    );
}

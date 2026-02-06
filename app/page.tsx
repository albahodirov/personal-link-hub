"use client";

import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkCard } from "@/components/LinkCard";
import { SocialGrid } from "@/components/SocialGrid";
import { ShareButton } from "@/components/ShareButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Globe, FileText, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Image from "next/image";
import { useState, useEffect } from "react";

type Language = "uz" | "en" | "ru";

const TRANSLATIONS = {
    uz: {
        bio: "Flutter orqali kelajak avlod mobil ilovalarini yaratmoqdamiz",
        official_website: "Rasmiy Sayt",
        resume: "Rezyume",
        latest_project: "So'nggi Loyiha",
        book_call: "Qo'ng'iroq qilish",
        coming_soon: "Tez kunda...",
        downloading: "Yuklab olinmoqda...",
        footer: "© 2026 Alisher Bahodirov",
    },
    en: {
        bio: "Building the next generation of mobile apps with Flutter",
        official_website: "Official Website",
        resume: "Resume",
        latest_project: "Latest Project",
        book_call: "Book a Call",
        coming_soon: "Coming Soon...",
        downloading: "Downloading...",
        footer: "© 2026 Alisher Bahodirov",
    },
    ru: {
        bio: "Создаю мобильные приложения нового поколения на Flutter",
        official_website: "Официальный сайт",
        resume: "Резюме",
        latest_project: "Последний проект",
        book_call: "Заказать звонок",
        coming_soon: "Скоро...",
        downloading: "Скачивание...",
        footer: "© 2026 Алишер Баходиров",
    },
};

export default function Home() {
    const [lang, setLang] = useState<Language>("uz");
    const [projectLink, setProjectLink] = useState("https://play.google.com/store/apps/details?id=com.raqobat.fairtech_mobile&pcampaignid=web_share");
    const [projectIconType, setProjectIconType] = useState<"apple" | "google">("google");

    useEffect(() => {
        // Smart Link Logic: Detect OS
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

        if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !(window as any).MSStream) {
            setProjectLink("https://apps.apple.com/uz/app/fair-tech/id6505064805");
            setProjectIconType("apple");
        } else {
            setProjectLink("https://play.google.com/store/apps/details?id=com.raqobat.fairtech_mobile&pcampaignid=web_share");
            setProjectIconType("google");
        }
    }, []);

    const t = TRANSLATIONS[lang];

    const LINKS = [
        {
            title: t.official_website,
            href: "#",
            icon: <Globe size={20} />,
            action: () => toast.info(t.coming_soon),
        },
        {
            title: t.resume,
            href: "/ALISHER BAHODIROV.png",
            icon: <FileText size={20} />,
            download: true,
            action: () => toast.success(t.downloading),
        },
        {
            title: t.latest_project,
            href: projectLink,
            icon: (
                <div className="relative w-5 h-5">
                    <Image
                        src={projectIconType === "apple" ? "/app-store.png" : "/play-store.png"}
                        alt="Store Icon"
                        fill
                        className="object-contain invert [.light_&]:invert-0 transition-[filter]"
                    />
                </div>
            ),
        },
        {
            title: t.book_call,
            href: "mailto:albahodirov@gmail.com",
            icon: <Smartphone size={20} />,
        },
    ];

    const SOCIALS = [
        {
            icon: (
                <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                    <Image src="/icon-instagram.png" alt="Instagram" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://www.instagram.com/albahodirov",
            label: "Instagram",
        },
        {
            icon: (
                <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                    <Image src="/icon-telegram.png" alt="Telegram" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://t.me/albahodirov",
            label: "Telegram",
        },
        {
            icon: (
                <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                    <Image src="/icon-linkedin.png" alt="LinkedIn" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://www.linkedin.com/in/albahodirov/",
            label: "LinkedIn",
        },
        {
            icon: (
                <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                    <Image src="/medium-new.png" alt="Medium" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://medium.com/@albahodirov",
            label: "Medium",
        },
        {
            icon: <div className="text-[var(--text-primary)]"><Globe size={24} /></div>, // GitHub icon placeholder functionality using Globe for now or we can use custom if needed, but standard lucide-react Github exists in imports
            href: "https://github.com/albahodirov",
            label: "GitHub",
            customRender: (
                <div className="relative w-6 h-6 opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center">
                    {/* Using Lucide Github icon directly as it's cleaner than an image if we don't have a specific PNG for it, 
                 but requirement said 'move existing Latest Project icon'. 
                 The existing Latest Project used <Github size={20} />. 
                 We will use that here. 
             */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 6 3 5.5 2.5 7.5-1.5 5-2 5-2 5s-.5-1-1.5-2-2-4.5c.5-1.5 1-2.5 1-4.5-5-2-4-2 2-3.5 1 1 1 2.5 1 4.5.5 .5 .5 2 1.5 4Z" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </div>
            )
        }
    ];

    // Replacing the last Social item with clean Lucide Icon logic if SVG above fails or complicates things. 
    // Actually, let's just properly import Github from lucide-react at top and use it.
    // We already imported Github.

    const SOCIALS_FINAL = [
        ...SOCIALS.slice(0, 4),
        {
            icon: <div className="text-[var(--foreground-rgb)]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg></div>,
            href: "https://github.com/albahodirov",
            label: "GitHub"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden transition-colors duration-500">
            {/* Background Gradient Spot */}
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-current rounded-full blur-[120px] pointer-events-none opacity-5" style={{ color: 'var(--foreground-rgb)' }} />
            <div className="fixed bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-current rounded-full blur-[100px] pointer-events-none opacity-5" style={{ color: 'var(--foreground-rgb)' }} />

            {/* Top Controls */}
            <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
                {/* Language Switcher */}
                <div className="flex items-center gap-1 p-1 rounded-full glass-panel">
                    {(["uz", "en", "ru"] as Language[]).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${lang === l
                                    ? "bg-white/10 text-[var(--text-primary)] shadow-sm"
                                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                }`}
                        >
                            {l.toUpperCase()}
                        </button>
                    ))}
                </div>
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
                        bio={t.bio}
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
                                download={link.download}
                            />
                        ))}
                    </div>

                    <SocialGrid links={SOCIALS_FINAL.map(s => ({ ...s, icon: s.icon }))} />
                </motion.div>

                <footer
                    className="mt-12 text-sm font-mono transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {t.footer}
                </footer>
            </div>
        </main>
    );
}

"use client";

import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkCard } from "@/components/LinkCard";
import { SocialGrid } from "@/components/SocialGrid";
import { ShareButton } from "@/components/ShareButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Globe, FileText, Smartphone, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Language = "uz" | "en" | "ru";

const TRANSLATIONS = {
    uz: {
        name: "Alisher Bahodirov",
        bio: "Flutter orqali kelajak avlod mobil ilovalarini ishlab chiqamiz",
        official_website: "Rasmiy Sayt",
        resume: "Rezyume",
        latest_project: "So'nggi Loyiha",
        book_call: "Qo'ng'iroq buyurtma qilish",
        coming_soon: "Tez kunda...",
        downloading: "Yuklab olinmoqda...",
        share_text: "Ushbu profilni ko'ring!",
        footer: "© 2026 Alisher Bahodirov",
    },
    en: {
        name: "Alisher Bakhadirov",
        bio: "Building the next generation of mobile apps with Flutter",
        official_website: "Official Website",
        resume: "Resume",
        latest_project: "Latest Project",
        book_call: "Book a Call",
        coming_soon: "Coming Soon...",
        downloading: "Downloading...",
        share_text: "Check out this profile!",
        footer: "© 2026 Alisher Bakhadirov",
    },
    ru: {
        name: "Алишер Бахадиров",
        bio: "Создаю мобильные приложения нового поколения на Flutter",
        official_website: "Официальный сайт",
        resume: "Резюме",
        latest_project: "Последний проект",
        book_call: "Заказать звонок",
        coming_soon: "Скоро...",
        downloading: "Скачивание...",
        share_text: "Посмотрите этот профиль!",
        footer: "© 2026 Алишер Бахадиров",
    },
};

export default function Home() {
    const [lang, setLang] = useState<Language>("uz");
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [projectLink, setProjectLink] = useState("https://play.google.com/store/apps/details?id=com.raqobat.fairtech_mobile&pcampaignid=web_share");
    const [projectIconType, setProjectIconType] = useState<"apple" | "google">("google");

    // Close language dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isLangOpen && !(event.target as Element).closest('.lang-dropdown')) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLangOpen]);

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
            href: "/ALISHER_BAHODIROV.pdf",
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
                <div className="relative w-6 h-6 opacity-90 hover:opacity-100 transition-opacity">
                    <Image src="/icon-github.png" alt="GitHub" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://github.com/albahodirov",
            label: "GitHub"
        },
        {
            icon: (
                <div className="relative w-6 h-6 opacity-90 hover:opacity-100 transition-opacity">
                    <Image src="/icon-linkedin.png" alt="LinkedIn" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://www.linkedin.com/in/albahodirov/",
            label: "LinkedIn",
        },
        {
            icon: (
                <div className="relative w-6 h-6 opacity-90 hover:opacity-100 transition-opacity">
                    <Image src="/medium-new.png" alt="Medium" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://medium.com/@albahodirov",
            label: "Medium",
        },
        {
            icon: (
                <div className="relative w-6 h-6 opacity-90 hover:opacity-100 transition-opacity">
                    <Image src="/icon-telegram.png" alt="Telegram" fill className="object-contain invert [.light_&]:invert-0 transition-[filter]" />
                </div>
            ),
            href: "https://t.me/albahodirov",
            label: "Telegram",
        },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden transition-colors duration-500">
            {/* Background Gradient Spot */}
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-current rounded-full blur-[120px] pointer-events-none opacity-5" style={{ color: 'var(--foreground-rgb)' }} />
            <div className="fixed bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-current rounded-full blur-[100px] pointer-events-none opacity-5" style={{ color: 'var(--foreground-rgb)' }} />

            {/* Top Controls */}
            <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
                {/* Language Switcher Dropdown */}
                <div className="relative lang-dropdown">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-white/10 transition-colors text-[var(--text-primary)] relative"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-xs font-bold leading-none">{lang.toUpperCase()}</span>
                        </div>
                    </button>

                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-12 right-0 glass-panel rounded-xl overflow-hidden min-w-[3rem] flex flex-col items-center py-1 gap-1"
                            >
                                {(["uz", "en", "ru"] as Language[]).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => {
                                            setLang(l);
                                            setIsLangOpen(false);
                                        }}
                                        className={`w-full px-3 py-2 text-xs font-medium text-center hover:bg-white/10 transition-colors ${lang === l ? "text-[var(--text-primary)] bg-white/5" : "text-[var(--text-secondary)]"
                                            }`}
                                    >
                                        {l.toUpperCase()}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <ThemeToggle />
                <ShareButton shareText={t.share_text} shareUrl="https://albahodirov.com" />
            </div>

            <div className="w-full max-w-md z-10 flex flex-col items-center">
                <motion.div
                    key={lang} /* Force re-render on language change to fix mobile state issues */
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                >
                    <ProfileHeader
                        name={t.name}
                        bio={t.bio}
                        imageUrl="/profile.jpg"
                    />

                    <div className="w-full space-y-4">
                        {LINKS.map((link, i) => (
                            <LinkCard
                                key={`${i}-${lang}`} /* Ensure deep re-render */
                                index={i}
                                title={link.title}
                                href={link.href}
                                icon={link.icon}
                                onClick={link.action}
                                download={link.download}
                            />
                        ))}
                    </div>

                    <SocialGrid links={SOCIALS} />
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

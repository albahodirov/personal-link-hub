"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("theme") !== "light";
        setIsDark(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

        // Dynamic Status Bar Color Update for Mobile
        const metaThemeColor = document.querySelector('meta[name="theme-color"]') || document.createElement('meta');
        if (!metaThemeColor.parentElement) {
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        // Dark: #030014 (Deep Blue/Black), Light: #ffffff
        metaThemeColor.setAttribute('content', isDark ? '#030014' : '#ffffff');

    }, [isDark]);

    return (
        <motion.button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-white/10 transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                initial={false}
                animate={{
                    y: isDark ? -20 : 0,
                    opacity: isDark ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center text-[var(--text-primary)]"
            >
                <Sun size={20} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    y: isDark ? 0 : 20,
                    opacity: isDark ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center text-[var(--text-primary)]"
            >
                <Moon size={20} />
            </motion.div>
        </motion.button>
    );
}

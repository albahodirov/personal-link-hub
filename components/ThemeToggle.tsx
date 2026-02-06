"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Default is dark. Check if light is persisted.
        const isLight = localStorage.getItem("theme") === "light";
        if (isLight) {
            setIsDark(false);
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);

        if (newDark) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
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
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-white/10 transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                color: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
                backgroundColor: isDark ? "transparent" : "rgba(0,0,0,0.05)",
            }}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
        </motion.button>
    );
}

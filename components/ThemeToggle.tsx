"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    // Initialize theme from local storage or preference
    useEffect(() => {
        const isLight = document.documentElement.classList.contains("light");
        if (isLight) setIsDark(false);
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);

        if (newDark) {
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
        }
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-panel hover:bg-white/10 text-white/80 transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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

import { useEffect, useState, useRef } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Darkmode() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);
    const initialized = useRef(false);

    // Initialize theme on mount to avoid hydration mismatch
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        
        setIsDark(initialDark);
        setMounted(true);
    }, []);

    // Apply theme changes
    useEffect(() => {
        if (!mounted) return;
        
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark, mounted]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    // Don't render until mounted to prevent flash
    if (!mounted) {
        return (
            <button
                className="px-3 py-2 rounded-lg bg-gray-600 text-white transition-colors"
                aria-label="Carregando tema..."
                disabled
            >
                <MdLightMode className="w-5 h-5" aria-hidden="true" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg bg-gray-600 dark:bg-cyan-600 text-white hover:bg-gray-700 dark:hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-900"
            aria-label={isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
            aria-pressed={isDark}
        >
            {isDark ? (
                <MdDarkMode className="w-5 h-5" aria-hidden="true" />
            ) : (
                <MdLightMode className="w-5 h-5" aria-hidden="true" />
            )}
        </button>
    );
}
import { useState, useEffect } from 'react'

function App() {
    // Inicializa o estado lendo a preferência inicial
    const [isDark, setIsDark] = useState(() => {
        return localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    // Sempre que o estado 'isDark' mudar, atualiza o HTML e o localStorage
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDark]);

    // Função do botão de toggle
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-cyan-50 min-h-screen p-8 transition-colors">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-4">
                    Olá mundo!
                </h1>

                <button onClick={toggleTheme} className="px-4 py-2 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 hover:cursor-pointer transition-colors">
                    {isDark ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
                </button>
            </div>
        </div>
    )
}

export default App
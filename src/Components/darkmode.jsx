import {useEffect, useState} from 'react'
import {MdDarkMode, MdLightMode} from "react-icons/md";

export default function Darkmode() {
    // Inicializa o estado a ler a preferência inicial
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
        <div>
            <div>
                <button onClick={toggleTheme}
                        className="px-8 py-3 rounded-xl bg-gray-600 dark:bg-cyan-600 text-white font-medium dark:hover:bg-gray-600 hover:bg-cyan-700 hover:cursor-pointer transition-colors">
                    {isDark ?
                        (<MdDarkMode className="text-md  "/>)
                        :
                        (<MdLightMode className="text-md "/>)
                    }
                </button>
            </div>
        </div>
    )
}


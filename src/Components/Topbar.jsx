import Darkmode from './darkmode';
import { FaCat } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { PiSwordFill } from "react-icons/pi";
import { FaCode } from 'react-icons/fa';

function Topbar() {
  const navLinkClass = ({ isActive }) => `
    px-4 py-2.5 md:px-6 md:py-3 font-mono text-sm rounded-lg transition-all duration-200 min-w-[44px] text-center
    ${isActive
      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
      : 'bg-gray-800 dark:bg-gray-700 text-gray-200 dark:text-gray-200 hover:bg-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500/20'
    }
  `;

  return (
    <nav className="fixed top-3 left-3 right-3 z-50" aria-label="Navegação principal">
      <div className="bg-gray-900/20 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-600/50">
        
        {/* Mobile: Stacked layout */}
        <div className="md:hidden p-3 space-y-2">
          {/* Brand row */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 no-underline group" aria-label="PurpleCat Dev - Home">
              <FaCat className="text-xl text-purple-500 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
              <span className="font-press text-base bg-gray-950 whitespace-nowrap  dark:bg-gray-950 px-2 py-0.5 rounded font-mono border border-gray-700">
                <span className="text-purple-400">PrpCat</span><span className="text-green-400">_DEV</span>
              </span>
            </Link>
            <Darkmode />
          </div>
          
          {/* Nav links - horizontal scroll on mobile */}
          <div className="flex items-center justify-center gap-1 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            <NavLink to="/" end className={navLinkClass} aria-current={({ isActive }) => isActive ? 'page' : undefined} title="Início">
              <HiMiniHome className="w-5 h-5 mx-auto text-purple-400" aria-hidden="true" />
            </NavLink>
            <NavLink to="/hero" className={navLinkClass} aria-current={({ isActive }) => isActive ? 'page' : undefined} title="Sobre">
              <PiSwordFill className="w-5 h-5 mx-auto text-purple-400" aria-hidden="true" />
            </NavLink>
            <NavLink to="/projects" className={navLinkClass} aria-current={({ isActive }) => isActive ? 'page' : undefined} title="Projetos">
              <FaCode className="w-5 h-5 mx-auto text-purple-400" aria-hidden="true" />
            </NavLink>
          </div>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-center justify-between px-4 py-3">
          {/* Brand - Left */}
          <Link to="/" className="flex items-center gap-2 no-underline group" aria-label="PurpleCat Dev - Home">
            <FaCat className="text-2xl text-purple-500 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            <span className="font-press text-lg whitespace-nowrap hover:bg-gray-900 dark:hover:bg-gray-950 px-2 py-0.5 rounded font-mono border border-gray-700">
              <span className="text-purple-400">PrpCat</span><span className="text-green-400">_DEV</span>
            </span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="flex items-center justify-center -ml-40 gap-1">
            <NavLink to="/" end className={navLinkClass} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
              <HiMiniHome className="w-5 h-5 mr-1 text-purple-400" aria-hidden="true" />
              <span className="inline-block">Início</span>
            </NavLink>
            <NavLink to="/hero" className={navLinkClass} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
              <PiSwordFill className="w-5 h-5 mr-1 text-purple-400" aria-hidden="true" />
              <span className="inline-block">Sobre</span>
            </NavLink>
            <NavLink to="/projects" className={navLinkClass} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
              <FaCode className="w-5 h-5 mr-1 text-purple-400" aria-hidden="true" />
              <span className="inline-block">Projetos</span>
            </NavLink>
          </div>

          {/* Dark Mode Toggle - Right */}
          <Darkmode />
        </div>

      </div>
    </nav>
  );
}

export default Topbar;
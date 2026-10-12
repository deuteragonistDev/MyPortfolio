import Topbar from './Components/Topbar';
import { Route, Routes } from 'react-router-dom';
import { Hero } from './pages/Hero.jsx';
import { Home } from "./pages/home.jsx";
import { Projects } from "./pages/Projects.jsx";

function App() {
    return (
        <div className={'bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors'}>
            <Topbar/>

            <main className="pt-24">
              <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/hero'} element={<Hero/>}/>
                  <Route path={'/projects'} element={<Projects/>}/>
                  <Route path={'*'} element={<NotFound/>}/>
              </Routes>
            </main>

            <footer className="bg-gray-800 dark:bg-gray-950 border-t border-gray-700 py-6 mt-auto">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">
                  © 2025 PurpleCat Dev. Construído com React + Tailwind CSS v4.
                </p>
              </div>
            </footer>
        </div>
    );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-press text-6xl text-cyan-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Página não encontrada</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Parece que essa página não existe ou foi movida. Vamos voltar para onde as coisas funcionam?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/" className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-mono hover:bg-cyan-700 transition-colors">
          Ir para Início
        </a>
        <a href="/projects" className="px-6 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg font-mono hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors border border-gray-600 dark:border-gray-400">
          Ver Projetos
        </a>
      </div>
    </div>
  );
}

export default App;
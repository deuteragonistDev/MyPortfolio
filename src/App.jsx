import Topbar from './Components/Topbar';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './pages/Hero.jsx';
import {Home} from "./pages/home.jsx";

function App() {
  return (
    <div className={'bg-gray-100 dark:bg-gray-800 min-h-screen transition-colors'}>
      <Topbar />

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/hero'} element={<Hero />} />
        <Route path={'*'} element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
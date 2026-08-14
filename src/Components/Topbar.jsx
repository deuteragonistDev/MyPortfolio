import Darkmode from './darkmode';
import { FaCat } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { PiSwordFill } from "react-icons/pi";


function Topbar() {
  return (
    <div className={'flex px-3 py-3 justify-between fixed top-4 left-3 right-3 bg-gray-500 text-gray-900 dark:bg-gray-700 dark:text-cyan-50 rounded-xl transition-colors'}>
      <div className={'font-press flex items-center'}>
        <div className={'text-lg font-bold text-purple-700 flex'}><a href={'https://github.com/deuteragonistDev'} className={'no-underline bg-black md:bg-transparent md:hover:bg-black hover:rounded-sm hover:px-2 ml-3 ease-out'} target={'_blank'} rel={'noreferrer'}>PrpCat<span className={'text-green-500'}>_DEV</span></a></div><FaCat className={'text-2xl text-purple-700'} />
      </div>

        <div className={'flex items-center text-lg'}>
        <Link to={'/'} className={'px-1 py-1 md:px-8 md:py-3 font-mono bg-gray-600 dark:bg-cyan-600 text-white rounded-lg dark:hover:bg-cyan-800 hover:bg-cyan-700 transition-colors'}><HiMiniHome className={'text-lg'} /></Link>
      </div>

      <div className={'flex items-center text-lg'}>
        <Link to={'/hero'} className={'px-1 py-1 md:px-8 md:py-3 font-mono bg-gray-600 dark:bg-cyan-600 text-white rounded-lg dark:hover:bg-cyan-800 hover:bg-cyan-700 transition-colors'}><PiSwordFill className={'text-lg'} /></Link>
      </div>

      <div>
        <Darkmode className="" />
      </div>
    </div>
  );
}

export default Topbar;
import Darkmode from "./darkmode";
import { FaCat } from "react-icons/fa";

function Topbar() {
    return (
        <div className={"flex px-3 py-3 justify-between fixed top-4 left-3 right-3 bg-gray-500 text-gray-900 dark:bg-gray-700 dark:text-cyan-50 rounded-xl transition-colors"}>
            <div className={"font-press  flex items-center  "}>
                <h1 className={"text-lg font-bold text-green-500 flex"}><a href={"https://github.com/deuteragonistDev"} className={"no-underline"} target={"_blank"} rel={"noreferrer"}>PrpCat_Dev</a></h1><FaCat className={"text-2xl"}/>
            </div>
            <div className={"flex "}>
            </div>
            <div className={""}>
                <Darkmode className="" />
            </div>
        </div>
    )
}
export default Topbar;
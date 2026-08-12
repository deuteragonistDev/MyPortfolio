import { Darkmode } from "./darkmode";
import {MdLight, MdLightMode} from "react-icons/md";

function Topbar() {
    return (
        <div className={"grid-cols-5 grid-flow-col bg-white text-gray-900 dark:bg-gray-500 dark:text-cyan-50 rounded-xl transition-colors"}>
            <div>
                <Darkmode />
            </div>
            <div>

            </div>
        </div>
    )
}
export default Topbar;
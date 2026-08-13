import Darkmode from "./darkmode";

function Topbar() {
    return (
        <div className={"flex justify-end gap-3 fixed top-4 left-3 right-3 bg-gray-500 text-gray-900 dark:bg-gray-700 dark:text-cyan-50 rounded-xl transition-colors"}>
            <div className={"font-bold font-(family-name:--font-mono) m-3"}>
                PrpCaT
            </div>
            <div className={"m-3 "}>
                <Darkmode className="" />
            </div>
            <div className={""}>
            </div>
        </div>
    )
}
export default Topbar;
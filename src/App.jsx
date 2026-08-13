import Darkmode from "./Components/darkmode";
import Topbar from "./Components/Topbar";

function App() {
    return (
        <div className={"bg-gray-100 dark:bg-gray-800 min-h-screen transition-colors"}>
            <Topbar />
        </div>
    )
}

export default App
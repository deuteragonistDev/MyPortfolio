import Darkmode from "./Components/darkmode";
import Topbar from "./Components/Topbar";
import {Routes, Route} from "react-router";
import {Hero} from "./pages/Hero.jsx";

function App() {

    return (
        <div className={"bg-gray-100 dark:bg-gray-800 min-h-screen transition-colors"}>
            <Topbar />

            <Routes>
                <Route path={"/"} element={<Hero />} />
                <Route path={"/Hero"} element={<Hero />} />
                <Route path={"*"} element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default App
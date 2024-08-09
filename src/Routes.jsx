import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Page404 from "./Pages/404Page.jsx";
import Header from "./Components/Header/Header.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";


function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Home />
                    </>
                } />
                <Route path="/statistics" element={
                    <>
                        <Header />
                        <Statistics />
                    </>
                } />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Router;
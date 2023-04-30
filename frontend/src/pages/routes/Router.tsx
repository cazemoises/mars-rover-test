import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "../home/Home";
import Projects from "../projects/Projects";
import Project from "../project/Project";
import NotFound from "../not_found/PageNotFound";
import Back from "../../components/go_back/Back";

const Router = () => {

    return (
        <BrowserRouter>
            <Back />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectTitle" element={<Project />} />
                <Route path="/*" element={<NotFoundWithBackButton />} />
            </Routes>
        </BrowserRouter>
    )

}

const NotFoundWithBackButton = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' && <Back />}
            <NotFound />
        </>
    )
}

export default Router;

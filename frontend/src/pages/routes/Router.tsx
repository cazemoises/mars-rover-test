import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import Projects from "../projects/Projects";
import Project from "../project/Project";
import NotFound from "../not_found/PageNotFound";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectTitle" element={<Project />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router;
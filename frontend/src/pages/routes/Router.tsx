// Import necessary components and modules
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../home/Home";
import Projects from "../projects/Projects";
import Project from "../project/Project";
import NotFound from "../notFound/PageNotFound";
import Back from "../../components/goBack/Back";

const Router = () => {
  return (
    <BrowserRouter>
      {/* Renders a reusable "Back" component */}
      <Back />
      <Routes>
        {/* Maps the "/" path to the Home component */}
        <Route path="/" element={<Home />} />
        {/* Maps the "/projects" path to the Projects component */}
        <Route path="/projects" element={<Projects />} />
        {/* Maps the "/projects/:projectTitle" path to the Project component */}
        <Route path="/projects/:projectTitle" element={<Project />} />
        {/* Maps any other path to the NotFoundWithBackButton component */}
        <Route path="/*" element={<NotFoundWithBackButton />} />
      </Routes>
    </BrowserRouter>
  );
};

const NotFoundWithBackButton = () => {
  const location = useLocation();

  return (
    <>
      {/* Renders a reusable "Back" component if the path is not "/" */}
      {location.pathname !== "/" && <Back />}
      <NotFound />
    </>
  );
};

export default Router;
import { useState } from "react";

import { ProjectsStyles } from "./Projects.styles";
import ProjectsList from "../../components/projects_list/ProjectsList";

import GridForm from "../../components/modals/grid_form/GridForm";

const Projects = () => {

    const [gridForm, setGridForm] = useState(false);

    const handleGridForm = () => {
        setGridForm(!gridForm);
    }

    return (
        <ProjectsStyles.Container>
            <ProjectsStyles.Title>Manage your projects</ProjectsStyles.Title>
            <ProjectsList />
            <ProjectsStyles.Button onClick={handleGridForm}>&#43; New project</ProjectsStyles.Button>
            {
                gridForm && <GridForm handleCreateModalVisible={handleGridForm} />
            }
        </ProjectsStyles.Container>
    )

}

export default Projects;
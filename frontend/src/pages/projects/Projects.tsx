// Import useState hook from React
import { useState } from "react";

// Import styled components and other necessary components
import { ProjectsStyles } from "./Projects.styles"; // Styled components for the Projects component
import ProjectsList from "../../components/projectsList/ProjectsList"; // Component that displays a list of projects
import GridForm from "../../components/modals/gridForm/GridForm"; // Component that displays a form for creating a new project

const Projects = () => {

    // Declare state variable for the grid form's visibility
    const [gridForm, setGridForm] = useState(false);

    // Define function for handling the grid form's visibility
    const handleGridForm = () => {
        setGridForm(!gridForm);
    }

    return (
        <ProjectsStyles.Container>
            <ProjectsStyles.Title>Manage your projects</ProjectsStyles.Title> {/* Display a title */}
            <ProjectsList /> {/* Display a list of projects */}
            <ProjectsStyles.Button onClick={handleGridForm}>&#43; New project</ProjectsStyles.Button> {/* Display a button for creating a new project */}
            {
                gridForm && <GridForm handleCreateModalVisible={handleGridForm} /> // Display the grid form if it's visible
            }
        </ProjectsStyles.Container>
    )
}

export default Projects;
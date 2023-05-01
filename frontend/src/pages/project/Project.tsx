// Import necessary components and modules 

import { useParams } from "react-router-dom";
import { ProjectStyles } from "./Project.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../components/grid/Grid";
import infoToast from "../../components/toasts/infoToast";
import LandRoverModal from "../../components/modals/landRoverForm/LandRoverModal";

const Project = () => {

    // Define the project interface
    interface IProject {

        id: number,
        x_limit: number,
        y_limit: number,
        title: string

    };

    // Get the project title from the URL parameters
    const { projectTitle } = useParams();
        
    // Set the visibility of the LandRoverModal components
    const [landRoverModalVisible, setLandRoverModalVisible] = useState(false);

    // Toggle the visibility of the LandRoverModal component
    const handleLandRoverModalVisible = () => {
        setLandRoverModalVisible(!landRoverModalVisible)
    }

    // State variables to store the rovers and grid for the current project
    const [rovers, setRovers] = useState([]);
    const [grid, setGrid] = useState({
        id: -1,
        x_limit: 0,
        y_limit: 0,
        title: ''
    });

    useEffect(() => {

        // Fetch the grid and rovers for the current project from the server
        const fetchData = async () => {

            try {
            
                const response = await axios.get(`http://127.0.0.1:3001/grid/${projectTitle}`);

                let data = response.data.success.data;

                setGrid(data);
                placeRovers(data);
            
            } catch(error) {
            
                console.error(error);
            
            };
            
        };

        // Place the rovers on the grid
        const placeRovers = async (project: IProject) => {

            try {
                
                const response = await axios.get(`http://127.0.0.1:3001/rover/filter-by-grid/${project.id}`);

                if (!response.data) {
            
                    return infoToast("No rovers landed on this plateau.");
            
                }

                return setRovers(response.data.success.data);
            
            } catch (error) {
            
                console.error(error);
            
            }
            
        }

        fetchData();
        
    }, []);

        return (
            <ProjectStyles.Container>
                <ProjectStyles.InfoContainer>
                    <ProjectStyles.Info>
                        &#x1F6C8;
                    </ProjectStyles.Info>
                    <ProjectStyles.InfoCard>
                        <ProjectStyles.Ul>
                            <ProjectStyles.Li>Hover the circles to see their info.</ProjectStyles.Li>
                            <ProjectStyles.Li>Click the circles to move them.</ProjectStyles.Li>
                        </ProjectStyles.Ul>
                    </ProjectStyles.InfoCard>
                </ProjectStyles.InfoContainer>
                <ProjectStyles.Title>{projectTitle}</ProjectStyles.Title>
                {
                    grid.id !== -1 &&
                    <Grid 
                        grid={grid}
                        rovers={rovers} />
                }
                <ProjectStyles.LandRoverButton onClick={handleLandRoverModalVisible}>&#43; Land a rover</ProjectStyles.LandRoverButton>
                {
                    landRoverModalVisible &&
                    <LandRoverModal 
                    gridId={grid.id} 
                    maxX={grid.x_limit}
                    maxY={grid.y_limit}
                    handleCreateModalVisible={handleLandRoverModalVisible} />
                }
            </ProjectStyles.Container>
    )

}

export default Project;
import { useParams } from "react-router-dom";

import { ProjectStyles } from "./Project.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../components/grid/Grid";
import infoToast from "../../components/toasts/infoToast";
import LandRoverModal from "../../components/modals/land_rover_form/LandRoverModal";

const Project = () => {

    interface IProject {

        id: number,
        x_limit: number,
        y_limit: number,
        title: string

    };

    const { projectTitle } = useParams();
    
    const [ landRoverModalVisible, setLandRoverModalVisible ] = useState(false);

    const handleLandRoverModalVisible = () => {
        setLandRoverModalVisible(!landRoverModalVisible)
    }

    const [ rovers, setRovers ] = useState([]);
    const [ grid, setGrid ] = useState({
        id: -1,
        x_limit: 0,
        y_limit: 0,
        title: ''
    });

    useEffect(() => {
        
        const fetchData = async () => {

            try {

                const response = await axios.get(`http://127.0.0.1:3001/grid/${projectTitle}`);
                console.log(response.data);
                let data = response.data.success.data;
                setGrid(data);

                placeRovers(data);

            } catch(error) {

                console.error(error);

            };

        };

        const placeRovers = async (project: IProject) => {

            try {

                const response = await axios.get(`http://127.0.0.1:3001/rover/filter-by-grid/${project.id}`);
                console.log(response);
                console.log(response.status)


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
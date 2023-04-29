import { useParams } from "react-router-dom";

import { ProjectStyles } from "./Project.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../components/grid/Grid";
import errorToast from "../../components/toasts/errorToast";

const Project = () => {

    interface IProject {

        id: number,
        x_limit: number,
        y_limit: number,
        title: string

    };

    const { projectTitle } = useParams();

    const [ rovers, setRovers ] = useState([]);
    const [ grid, setGrid ] = useState({
        id: 0,
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
                console.log(response.status)


                if (!response.data) {
                    return errorToast("No rovers landed on this plateau.");
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
            <Grid 
                grid={grid}
                rovers={rovers} />
        </ProjectStyles.Container>
    )

}

export default Project;
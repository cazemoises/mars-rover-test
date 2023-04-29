import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ProjectsListStyles } from "./ProjectsList.style";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectsList = () => {

    interface Project {
        id: number;
        title: string;
        x_limit: number;
        y_limit: number;
    }    

    const [projects, setProjects] = useState([]);

    useEffect(() => {

    const fetchData = async () => {

        try {
        
            const response = await axios.get('http://127.0.0.1:3001/grid');
            setProjects(response.data.success.data);
        
        } catch (error) {
        
            console.error(error);
            toast.error('Error at retrieving projects data.');
        
        }
        
    };

    fetchData();
  }, []);

    return (
        <ProjectsListStyles.Container>
            {projects.map((project: Project) => (
            <ProjectsListStyles.Project to={`${project.title}`} key={project.id}>
                <ProjectsListStyles.ProjectName>{project.title}</ProjectsListStyles.ProjectName>
            </ProjectsListStyles.Project>   
            ))}
        </ProjectsListStyles.Container>
    );
};

export default ProjectsList;
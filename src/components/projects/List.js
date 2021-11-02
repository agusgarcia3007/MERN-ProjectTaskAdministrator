import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/ProjectContext';

const List = () => {




    const projectsContext = useContext(ProjectContext);
    const { projects, getProjects } = projectsContext

    useEffect(()=>{
        getProjects();
    },[]);

    if(projects.length === 0) return null;


    return ( 
        <ul className="listado-proyectos">
            {projects.map( project => (
                <Project project={project} key={project.id}/>
            ))}
        </ul>
     );
}
 
export default List;
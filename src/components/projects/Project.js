import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';


const Project = ({project}) => {

    const projectsContext = useContext(ProjectContext);
    const { currentProject } = projectsContext;


    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => currentProject(project)}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;
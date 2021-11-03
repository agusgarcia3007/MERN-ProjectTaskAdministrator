import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const Project = ({project}) => {

    const projectsContext = useContext(ProjectContext);
    const { currentProject } = projectsContext;


    const TasksContext = useContext(TaskContext);
    const { getTasks } = TasksContext;
    //getData
    const getData = id => {
        currentProject(id);
        getTasks(id);

    }

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => getData(project.id)}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;
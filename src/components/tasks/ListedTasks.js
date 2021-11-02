import React, {useContext} from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/ProjectContext';
import Illustration from '../../assets/illustration.png';

const ListedTasks = () => {


    const tasks = [

    ]

    const projectsContext=useContext(ProjectContext);
    const { project, deleteProject } = projectsContext;

    if(!project) {
        return(
            <>
                <h2>Choose your project</h2>
                <img src={Illustration} alt='illustration' className='illustration'/>
            </>

        )
    }

    const [currentProject] = project;

    


    return ( 
        <>
            <h2>Project: {currentProject.name} </h2>

            <ul className="listado-tareas">
                {tasks.length === 0 
                    ? (<li className="tarea"><p>No tasks yet</p></li>) 
                    : tasks.map( task => (
                        <Task 
                            task={task}
                            key={task.name}
                        />
                    )) 
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={() => deleteProject(currentProject.id)}
            >Delete Project &times;</button>
        </>
     );
}
 
export default ListedTasks;
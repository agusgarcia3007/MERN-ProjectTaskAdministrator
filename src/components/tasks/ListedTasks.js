import React, {useContext} from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';
import Illustration from '../../assets/illustration.png';
import Question from '../../assets/question.png';

const ListedTasks = () => {

    const projectsContext=useContext(ProjectContext);
    const { project, deleteProject } = projectsContext;


    const TasksContext = useContext(TaskContext);
    const { projectTask } = TasksContext;


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
            <h2>PROJECT: {currentProject.name} </h2>

            <ul className="listado-tareas">
                {projectTask.length === 0 
                    ? (<img src={Question} alt='question mark' className='illustration'/>) 
                    : projectTask.map( task => (
                            <Task 
                            classNames='tarea'
                            key={task.id}
                            task={task}
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
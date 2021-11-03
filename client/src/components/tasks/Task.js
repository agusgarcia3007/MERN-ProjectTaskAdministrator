import React, { useContext } from 'react';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import TaskContext from '../../context/tasks/TaskContext';
import ProjectContext from '../../context/projects/ProjectContext';



const Task = ({task}) => {

    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    const [currentProject] = project;


    const tasksContext = useContext(TaskContext);
    const { delTask, getTasks, changeState, currentTask } = tasksContext;


    const handleDel = id => {
        delTask(id);
        getTasks(currentProject.id);
    }

    const handleChange = task => {
        if(task.completed){
            task.completed=false;
        }else{
            task.completed=true;
        }
        changeState(task);
    }

    //edit task
    const chooseTask = task => {
        currentTask(task);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>

            <div className="estado">
                {task.completed 
                    ? ( <button type='button' className='completo' onClick={() => handleChange(task)} >Completed</button> )
                    : ( <button type='button' className='incompleto' onClick={() => handleChange(task)} >Not Yet</button> )
                }
            </div>

            <div className="acciones">
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => chooseTask(task)}
                >
                    <FiEdit/>
                </button>

                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => handleDel(task.id)}
                >
                    <FiTrash2 />
                </button>
            </div>
        </li>
     );
}
 
export default Task;
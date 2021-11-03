import React,{ useContext, useState } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TasksForm = () => {


    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { addTask, getTasks } = tasksContext;

    const [task, setTask] = useState({name:''});
    const { name } = task;

    const [error, setError] = useState(false);

    if(!project) return null;

    const [currentProject] = project;

    const handleBlur = e =>{
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validate
        if(name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        task.projectID = currentProject.id;
        task.completed = false
        addTask(task);
        getTasks(currentProject.id);
        setTask({name:""});
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                {error ? <p className='mensaje error'>We know you have something to do  😎</p> : null}
                <div className="contenedor-input">
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Your Task'
                        name='name'
                        
                        onBlur={handleBlur}
                        />
                </div>

                <div className="contenedor-input">
                    <input  
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Add new task'
                        
                        />
                </div>
            </form>
        </div>
     );
}
 
export default TasksForm;
import React,{ useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TasksForm = () => {


    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { chosenTask ,addTask, getTasks, editTask } = tasksContext;

    //effect to finde selected tasks
    useEffect(() => {
        if(chosenTask !== null){
            setTask(chosenTask);
        }else{
            setTask({name:""});
        }
    }, [chosenTask])

    const [task, setTask] = useState({name:''});
    const { name } = task;

    const [error, setError] = useState(false);

    if(!project) return null;

    const [currentProject] = project;

    const handleChange = e =>{
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

        if(chosenTask === null){

            task.projectID = currentProject.id;
            task.completed = false
            addTask(task);

        }else{
            editTask(task);

        }

        setError(false);
        
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
                        placeholder={chosenTask ? 'Choose the new Title' : 'Your Task'}
                        name='name'
                        value={name}
                        onChange={handleChange}
                        />
                </div>

                <div className="contenedor-input">
                    <input  
                        type='submit'
                        className={chosenTask ? 'btn btn-secondary btn-submit btn-block' : 'btn btn-primario btn-submit btn-block'}
                        value={chosenTask ? 'Edit' : 'Add'}
                        
                        />
                </div>
            </form>
        </div>
     );
}
 
export default TasksForm;
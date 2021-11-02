import React,{ useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';


const TasksForm = () => {


    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    if(!project) return null;

    const [currentProject] = project;

    const handleBlur =()=>{
        alert('hola');
    }

    return ( 
        <div className="formulario">
            <form>
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
                        type='sunmit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Add new task'
                        
                        />
                </div>
            </form>
        </div>
     );
}
 
export default TasksForm;
import React, { useContext, useState } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import { FiFolderPlus } from 'react-icons/fi'

const NewProject = () => {


    const projectsContext = useContext(ProjectContext);
    const { form, showForm} = projectsContext;

    //project state
    const [project, setProject] = useState({
        name:''
    });

    const handleBlur = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

    }
    

    return ( 
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={ showForm}
                >
                    Add <FiFolderPlus/>
            </button>

            {
                form ? 
                (
                    <form className='formulario-nuevo-proyecto' onSubmit={handleSubmit}>
                        <input type='text' className='input-text' placeholder='Project Name' name='name' onBlur={handleBlur}/>
                        <input type="submit" className='btn btn-primario btn-block' value='Add Project' />
                    </form>
                ) : null

            }
        </>
     );
}
 
export default NewProject;
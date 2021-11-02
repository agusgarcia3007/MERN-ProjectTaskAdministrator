import React, { useContext, useState } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import { FiFolderPlus, FiX } from 'react-icons/fi'

const NewProject = () => {


    const projectsContext = useContext(ProjectContext);
    const { form, error, showForm, addProject, closeForm, validateForm } = projectsContext;

    //project state
    const [project, setProject] = useState({
        name:''
    });
    const { name } = project;

    const handleBlur = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validation
        if(name === '') {
            validateForm()
            return;
        }

        //adding project with our context function
        addProject(project);

        //reset projects form
        setProject({
            name : ''
        })
    }

    let btn;

    if (form){
        btn = <button type='button' className='btn btn-blank' onClick={closeForm}><FiX/></button>
    }else{
        btn = <button type='button' className='btn btn-block btn-primario' onClick={ showForm} > Add </button>
    }
    

    return ( 
        <>
            {btn}

            {
                form ? 
                (
                        <form className='formulario-nuevo-proyecto' onSubmit={handleSubmit}>
                            <input type='text' className='input-text' placeholder='Project Name' name='name' onBlur={handleBlur}/>
                            <input type="submit" className='btn btn-primario btn-block' value='Add Project' />
                        </form>
                        
                ) : null


            }

            {error ? <p className="mensaje error">Tell us what you have in mind 😉</p> :null}
        </>
     );
}
 
export default NewProject;
import React, { useState } from 'react'

const NewProject = () => {

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
                >
                    Add 
            </button>

            <form className='formulario-nuevo-proyecto' onSubmit={handleSubmit}>
                <input type='text' className='input-text' placeholder='Project Name' name='name' onBlur={handleBlur}/>
                <input type="submit" className='btn btn-primario btn-block' value='Add Project' />
            </form>
        </>
     );
}
 
export default NewProject;
import React  from 'react';


const TasksForm = () => {

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
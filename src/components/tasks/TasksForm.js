import React  from 'react';


const TasksForm = () => {
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Your Task'
                        name='name'
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
import React from 'react';
import { FiEdit, FiTrash2 } from "react-icons/fi";


const Task = ({task}) => {
    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>

            <div className="estado">
                {task.completed 
                    ? ( <button type='button' className='completo'  >Completed</button> )
                    : ( <button type='button' className='incompleto'  >Not Yet</button> )
                }
            </div>

            <div className="acciones">
                <button
                    type='button'
                    className='btn btn-secundario'
                >
                    <FiEdit/>
                </button>

                <button
                    type='button'
                    className='btn btn-primario'
                >
                    <FiTrash2 />
                </button>
            </div>
        </li>
     );
}
 
export default Task;
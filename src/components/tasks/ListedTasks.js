import React from 'react';
import Task from './Task';

const ListedTasks = () => {


    const tasks = [
        {name: 'Choose platform', completed: false},
        {name: 'test app', completed: true }
    ]

    return ( 
        <>
            <h2>Project: </h2>

            <ul className="listado-tareas">
                {tasks.length === 0 
                    ? (<li className="tarea"><p>No tasks yet</p></li>) 
                    : tasks.map( task => (
                        <Task 
                            task={task}
                            key={task.name}
                        />
                    )) 
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
            >Delete Project &times;</button>
        </>
     );
}
 
export default ListedTasks;
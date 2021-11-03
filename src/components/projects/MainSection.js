import React from 'react';
import Header from '../layout/Header';
import TasksForm from '../tasks/TasksForm';
import ListedTasks from '../tasks/ListedTasks';



const MainSection = () => {
    return ( 
        <div className="seccion-principal">
        <Header />
        <main>
            <TasksForm />

            <div className="contenedor-tareas">
                <ListedTasks />
            </div>
        </main>
    </div>
     );
}
 
export default MainSection;
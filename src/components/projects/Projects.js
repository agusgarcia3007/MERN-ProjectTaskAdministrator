import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TasksForm from '../tasks/TasksForm';
import ListedTasks from '../tasks/ListedTasks';

const Projects = () => {
    return ( 
        <div className="contenedor-app">
            
            <Sidebar />

            <div className="seccion-principal">
                <Header />
                <main>
                    <TasksForm />

                    <div className="contenedor-tareas">
                        <ListedTasks />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;
import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import TasksForm from '../tasks/TasksForm';
import ListedTasks from '../tasks/ListedTasks';
import AuthContext from '../../context/auth/authContext';


const MainSection = () => {

    //get auth info
    const authContext = useContext(AuthContext);
    const { userAuthenticated } = authContext;


    useEffect(() => {
        userAuthenticated();
    }, [])

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
import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/ProjectContext';
import AlertContext from '../../context/alert/alertContext';
import drawer from '../../assets/drawer.png'

const List = () => {




    const projectsContext = useContext(ProjectContext);
    const { msg, projects, getProjects } = projectsContext;



    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    useEffect(()=>{
        if(msg){
            showAlert(msg.msg, msg.category)
        }
        getProjects();
        //eslint-disable-next-line
    },[msg]);

    if(projects.length === 0) {
        return(
            <>
                <h2>No Projects Yet</h2>
                <img src={drawer} alt="drawer" className='illustration' />
            </>
        )
    }


    return ( 
        <ul className="listado-proyectos">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            {projects.map( project => (
                <Project project={project} key={project._id}/>
            ))}
        </ul>
     );
}
 
export default List;
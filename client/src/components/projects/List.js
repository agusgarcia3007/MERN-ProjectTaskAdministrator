import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/ProjectContext';
import drawer from '../../assets/drawer.png'

const List = () => {




    const projectsContext = useContext(ProjectContext);
    const { projects, getProjects } = projectsContext

    useEffect(()=>{
        getProjects();
        //eslint-disable-next-line
    },[]);

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
            {projects.map( project => (
                <Project project={project} key={project._id}/>
            ))}
        </ul>
     );
}
 
export default List;
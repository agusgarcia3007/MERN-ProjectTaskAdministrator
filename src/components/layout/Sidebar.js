import Reac, { useContext} from 'react';
import NewProject from '../projects/NewProject';
import List from '../projects/List';
import ProjectContext from '../../context/projects/ProjectContext';

const Sidebar = () => {


    const projectsContext = useContext(ProjectContext);
    const { projects } = projectsContext;

    let html;
    if(projects.length === 0){
        html = null
    }else{
        html = <h2>Your Projects</h2>
    }

    return ( 
        <aside>
            <h1>TASKIE</h1>

            <NewProject />

            <div className="proyectos">
                {html}

                <List />
            </div>
        </aside>
     );
}
 
export default Sidebar;
import React from 'react';
import Project from './Project';

const List = () => {


    const projects = [
        {name: 'alfa=pampa'},
        {name: 'weig'}
    ]

    return ( 
        <ul className="listado-proyectos">
            {projects.map( project => (
                <Project project={project} />
            ))}
        </ul>
     );
}
 
export default List;
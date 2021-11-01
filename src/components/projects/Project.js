import React from 'react'


const Project = ({project}) => {
    return ( 
        <li>
            <button
                type='button'
                className='btn btn-plank'
            >{project.name}</button>
        </li>
     );
}
 
export default Project;
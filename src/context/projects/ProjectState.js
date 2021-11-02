import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ReducerProject from './ReducerProject';
import {PROJECT_FORM} from '../../types';

const ProjectState = props => {

    const initialState = {
        projects : [
            {id:1, name: 'alfa=pampa'},
            {id:2, name: 'weig'}
            ],
        form : false
    }


    //dispatch to execute actions
    const [state, dispatch] = useReducer(ReducerProject, initialState);

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    return(
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState


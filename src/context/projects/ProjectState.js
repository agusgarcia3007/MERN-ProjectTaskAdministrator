import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ReducerProject from './ReducerProject';
import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, CLOSE_FORM, VALIDATE_FORM, CURRENT_PROJECT, DELETE_PROJECT} from '../../types';
import { nanoid } from 'nanoid';



const ProjectState = props => {

    const projects = [
                {id:1, name: 'alfa Pampa'},
                {id:2, name: 'weig'}
    ];

    const initialState = {
        projects : [],
        form : false,
        error: false,
        project:null
    }


    //dispatch to execute actions
    const [state, dispatch] = useReducer(ReducerProject, initialState);

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    };
    const closeForm = () => {
        dispatch({
            type: CLOSE_FORM
        })
    }

    //get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload : projects
        })
    };

    //add new project
    const addProject = project => {
        project.id = nanoid();

        dispatch({
            type : ADD_PROJECT,
            payload : project
        })

    };

    const validateForm = () => {
        dispatch ({
            type: VALIDATE_FORM
        })
    };

    //select project
    const currentProject = projectID => {
        dispatch({
            type:CURRENT_PROJECT,
            payload:projectID
        })
    }

    //delete project
    const deleteProject = projectID => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectID
        })
    }

    return(
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                error : state.error,
                project: state.project,
                showForm,
                closeForm,
                getProjects,
                addProject,
                validateForm,
                currentProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState


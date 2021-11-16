import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ReducerProject from './ReducerProject';
import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, CLOSE_FORM, VALIDATE_FORM, CURRENT_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from '../../types';
import axiosClient from '../../config/axios';


const ProjectState = props => {

    const initialState = {
        projects : [],
        form : false,
        error: false,
        project:null,
        msg: null
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
    const getProjects = async () => {
        try {
            const res = await axiosClient.get('/api/projects');

            dispatch({
                type: GET_PROJECTS,
                payload : res.data
            })
        } catch (error) {
            const alert = { msg: 'An error occurred while deleting your project. please try again', category: 'alerta-error'}
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
            
        }
    };

    //add new project
    const addProject = async project => {
        try {
            const resp = await axiosClient.post('/api/projects', project);

            dispatch({
                type : ADD_PROJECT,
                payload : resp.data
            })

        } catch (error) {
            const alert = { msg: 'An error occurred while deleting your project. please try again', category: 'alerta-error'}
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
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
    const deleteProject = async projectID => {
        try {
            await axiosClient.delete(`/api/projects/${projectID}`)
            dispatch({
                type: DELETE_PROJECT,
                payload: projectID
            })
        } catch (error) {
            const alert = { msg: 'An error occurred while deleting your project. please try again', category: 'alerta-error'}
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }

    return(
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                error : state.error,
                project: state.project,
                msg: state.msg,
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


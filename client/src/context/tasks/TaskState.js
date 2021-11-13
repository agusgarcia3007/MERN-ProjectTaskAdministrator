import React, {useReducer} from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {GET_TASKS, ADD_TASK, DELETE_TASK,  CURRENT_TASK, UPDATE_TASK} from '../../types';
import axiosClient from '../../config/axios';


const TaskState = props => {
    const initialState ={
        projectTask:[],
        chosenTask: null
    }   

    const [state, dispatch ] = useReducer(TaskReducer, initialState);


    //get tasks
    const getTasks = async project => {
        try {
            const resp = await axiosClient.get('/api/tasks', { params: {project} })
            dispatch({
                type: GET_TASKS,
                payload: resp.data
            })
        } catch (error) {
            console.log(error)
        }
    };

    //add tasks
    const addTask = async task => {
        try {
            await axiosClient.post('/api/tasks', task);
            //res.data
            dispatch({
                type:ADD_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error)
        }
    }

    const delTask = async (id, project) => {
        try {

            await axiosClient.delete(`/api/tasks/${id}`, {params:{ project }})

            dispatch({
                type: DELETE_TASK,
                payload: id
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    //edit task
    const editTask = async task => {
        try {
            const res = await axiosClient.put(`api/tasks/${task._id}`, task)

            dispatch({
                type: UPDATE_TASK,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const currentTask = task => {
        dispatch({
            type:CURRENT_TASK,
            payload: task
        })
    }

    

    return(
        <TaskContext.Provider
            value={{
                projectTask: state.projectTask,
                chosenTask: state.chosenTask,
                getTasks,
                addTask,
                delTask,
                currentTask,
                editTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
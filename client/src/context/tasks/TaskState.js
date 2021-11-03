import React, {useReducer} from 'react';
import { nanoid } from 'nanoid';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {GET_TASKS, ADD_TASK, DELETE_TASK, TASK_STATE, CURRENT_TASK, UPDATE_TASK} from '../../types'


const TaskState = props => {
    const initialState ={
        tasks:[
            {id:1, name: 'Choose platform', completed: false, projectID: 1},
            {id: 2,name: 'Choose color', completed: true, projectID: 1},
            {id:3 , name: 'test app', completed: true, projectID: 2}
        ],
        projectTask:null,
        chosenTask: null
    }   

    const [state, dispatch ] = useReducer(TaskReducer, initialState);


    //get tasks
    const getTasks = projectID => {
        dispatch({
            type: GET_TASKS,
            payload: projectID
        })
    };

    //add tasks
    const addTask = task => {
        task.id = nanoid();
        dispatch({
            type:ADD_TASK,
            payload: task
        })
    }

    const delTask = id => {
        dispatch({
            type:DELETE_TASK,
            payload:id
        })
    }

    const changeState = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }

    const currentTask = task => {
        dispatch({
            type:CURRENT_TASK,
            payload: task
        })
    }

    //edit task
    const editTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTask: state.projectTask,
                chosenTask: state.chosenTask,
                getTasks,
                addTask,
                delTask,
                changeState,
                currentTask,
                editTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
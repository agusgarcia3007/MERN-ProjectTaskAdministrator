import React, {useReducer} from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {GET_TASKS, ADD_TASK, DELETE_TASK} from '../../types'


const TaskState = props => {
    const initialState ={
        tasks:[
            {id:1, name: 'Choose platform', completed: false, projectID: 1},
            {id: 2,name: 'Choose color', completed: true, projectID: 1},
            {id:3 , name: 'test app', completed: true, projectID: 2}
        ],
        projectTask:null
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

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTask: state.projectTask,
                getTasks,
                addTask,
                delTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
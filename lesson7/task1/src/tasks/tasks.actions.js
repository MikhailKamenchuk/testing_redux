import * as taskGateway from './tasksGateway';
import { tasksDataSelector } from './tasks.selectors'

export const SHOW_SPINNER = 'TASKS/SHOW_SPINNER';
export const TASKS_DATA_RECIEVED = 'TASKS/TASKS_DATA_RECIEVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER
  }
}

export const tasksDataRecieved = tasksData => {
  return {
    type: TASKS_DATA_RECIEVED,
    payload: {
      tasksData
    }
  }
}

export const fetchTasksList = () => {
  return dispatch => {
    dispatch(showSpinner())
    taskGateway.getTasksList()
      .then(tasks => dispatch(tasksDataRecieved(tasks)))
  }
}

export const createTask = taskData => {
  return dispatch => {
    const newTask = {
      text: taskData,
      done: false
    };
    taskGateway.createTask(newTask).then(() => {
      dispatch(showSpinner())
      taskGateway.getTasksList()
        .then(tasks => dispatch(tasksDataRecieved(tasks)))
    })
  }
}

export const deleteTask = taskId => {
  return dispatch => {
    taskGateway.deleteTask(taskId)
      .then(() => {
        dispatch(showSpinner())
        taskGateway.getTasksList()
          .then(tasks => dispatch(tasksDataRecieved(tasks)))
      })
  }
}

export const changeTask = taskId => {
  return (dispatch, getState) => {
    const tasksList = tasksDataSelector(getState());
    const { done, text } = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      text,
      done: !done
    };
    taskGateway.updateTask(taskId, updatedTask)
      .then(() => {
        dispatch(showSpinner())
        taskGateway.getTasksList()
          .then(tasks => dispatch(tasksDataRecieved(tasks)))
      })
  }
}
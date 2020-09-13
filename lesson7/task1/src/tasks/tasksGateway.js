const baseUrl = 'https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/tasks_react';

export const getTasksList = () => fetch(baseUrl)
  .then(res => res.json());

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
}).then(res => {
    if (!res.ok) {
      throw new Error('Failed to create task')
    }
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
}).then(res => {
    if (!res.ok) {
      throw new Error('Failed to update task')
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to delete task')
    }
  }); 
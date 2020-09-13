import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput'
import {
  // fetchTasksList,
  createTask,
  updateTask,
  deleteTask
} from './tasksGateway';
import { sortedTasksDataSelector } from './tasks.selectors'
import * as tasksActions from './tasks.actions';

class TasksList extends React.Component {
  componentDidMount() {
    this.props.fetchTasksList()
  }

  render() {
    const { tasks } = this.props;
    return (
      <main className="todo-list">
        <CreateTaskInput
          handleAddTodo={this.props.createTask}
        />
        <ul className="list">
          {tasks.map(task =>
            <Task
              key={task.id}
              onChange={this.props.changeTask}
              onDelete={this.props.deleteTask}
              {...task} />)}
        </ul>
      </ main>
    )
  }
}

const mapState = state => {
  return {
    tasks: sortedTasksDataSelector(state)
  }
}

const mapDispatch = {
  fetchTasksList: tasksActions.fetchTasksList,
  createTask: tasksActions.createTask,
  deleteTask: tasksActions.deleteTask,
  changeTask: tasksActions.changeTask,
}

export default connect(mapState, mapDispatch)(TasksList)
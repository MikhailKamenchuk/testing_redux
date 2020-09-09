import React from 'react';
import { connect } from 'react-redux';
import * as UsersActions from './users.actions';

class Users extends React.Component {
  onCreateUser = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`
    }
    this.props.addUser(newUser)
  }

  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onCreateUser}>Create user</button>
        <ul className="users__list">
          {users.map(({ id, name }) => (
            <li key={id} className="users__list-item">
              <span>{name}</span>
              <button className="users__delete-btn" onClick={() => deleteUser(id)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.users.usersList
  }
}
const mapDispatch = {
  addUser: UsersActions.addUser,
  deleteUser: UsersActions.deleteUser,
}

export default connect(mapState, mapDispatch)(Users)
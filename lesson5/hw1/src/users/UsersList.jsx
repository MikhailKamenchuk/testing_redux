import React from 'react';
import { connect } from 'react-redux';
import { filterListSelector, filterTextSelector } from './users.selectors';
import { changeFilterText } from './users.actions';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  handleInputTextGhange = e => {
    this.props.changeFilterText(e.target.value)
  }

  render() {
    const { users, filterText } = this.props;
    return (
      <div>
        <Filter
          count={users.length}
          filterText={filterText}
          onChange={this.handleInputTextGhange}
        />
        <ul className="users">
          {users.map(user => {
            return (
              <User key={user.id} {...user} />
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: filterListSelector(state),
    filterText: filterTextSelector(state)
  }
}

const mapDispatch = {
  changeFilterText
}

export default connect(mapState, mapDispatch)(UsersList)
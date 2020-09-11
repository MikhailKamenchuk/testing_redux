import React from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selectors';
import Spinner from './Spinner';

class UserInfo extends React.Component {
  render() {
    const { isFetching, userData } = this.props;
    if (isFetching) {
      return <Spinner />
    }
    if (!userData) {
      return null
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{userData.name}</span>
          <span className="user__location">{userData.location}</span>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    userData: userDataSelector(state),
    isFetching: isFetchingSelector(state)
  }
}

export default connect(mapState)(UserInfo)
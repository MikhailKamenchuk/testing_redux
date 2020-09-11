import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from './users.actions';

class SearchField extends React.Component{
  state = {
    userName: ''
  }

  onChange = e => this.setState({
    userName: e.target.value
  })

  handleShowUserData = () => {
    this.props.fetchUserData(this.state.userName)
  }
  render() {
    return (
      <div className="name-form">
        <input 
        type="text" 
        className="name-form__input" 
        value={this.state.userName}
        onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleShowUserData}>Show</button>
      </div>
    )
  }
}

const mapDispatch = {
  fetchUserData
}

export default connect(null, mapDispatch)(SearchField)
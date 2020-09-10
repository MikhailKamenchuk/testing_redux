import React from "react";
import Pagination from './Pagination';
import User from './User'
import { connect } from "react-redux";
import {setCurrentPage} from './currentPage.actions';
import { usersSelector } from "./users.selectors";
import { currentPageSelector } from "./currentPage.selectors";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 3
    }
  }

  goNextPage = () => {
    const {setCurrentPage, currentPage} = this.props;
    setCurrentPage(currentPage + 1)
  }

  goPrevPage = () => {

    const {setCurrentPage, currentPage} = this.props;
    setCurrentPage(currentPage - 1)
  }

  render() {
    const { itemsPerPage } = this.state;
    const { currentPage } = this.props;
    
    const indexOfLastPost = (currentPage + 1) * itemsPerPage;
    const indexOfFirstPage = indexOfLastPost - itemsPerPage;
    const currentUsers = [...this.props.users].slice(indexOfFirstPage, indexOfLastPost);

    return (
      <div>
        <Pagination
          {...this.props}
          itemsPerPage={itemsPerPage}
          goNext={this.goNextPage}
          goPrev={this.goPrevPage}
          totalItems={this.props.users.length}
        />
        <ul className="users">
          {currentUsers.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: usersSelector(state),
    currentPage: currentPageSelector(state)
  }
}

const mapDispatch = {
  setCurrentPage
}

export default connect(mapState, mapDispatch)(UsersList);
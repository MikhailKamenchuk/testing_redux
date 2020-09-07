import React from 'react';
import UserMenu from './UserMenu';

class Header extends React.Component{
  render(){
    return (
      <div className="header">
        <UserMenu />
      </div>
    )
  }
}

export default Header
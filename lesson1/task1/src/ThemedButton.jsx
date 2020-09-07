import React, { useState } from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component{
  render(){
    return (
      <button
        {...this.props}
        className="btn"
        style={{
          color: this.context.fontColor,
          backgroundColor: this.context.background
        }}
      />
    )
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton
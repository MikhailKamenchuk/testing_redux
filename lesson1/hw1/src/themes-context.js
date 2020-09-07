import React from 'react';

export const themes = {
  dark: {
    fontColor: '#fff',
    background: '#222'
  },
  light: {
    fontColor: '#000',
    background: '#eee'
  }
}

export const ThemeContext = React.createContext(themes.dark);
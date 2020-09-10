import React from 'react';
import { connect } from "react-redux";
import {toggleOption} from './options.actions'
import Options from './Options';
import {availableOptionsSelector} from './options.selectors';

const mapState = state => {
  return {
    options: availableOptionsSelector(state)
  }
}

const mapDispatch = {
  moveOption: toggleOption
}

export default connect(mapState, mapDispatch)(Options);
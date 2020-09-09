import React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './counter.actions';

const Counter = ({count, increment, decrement, reset}) => {
  return (
    <div className="counter">
    <button className="counter__button" onClick={decrement}>
      -
    </button>
    <span className="counter__value" onClick={reset}>
      {count}
    </span>
    <button className="counter__button" onClick={increment}>
      +
    </button>
  </div>
  )
}

const mapState = state => {
  return {
    count: state
  }
}
const mapDispatch = {
  increment: CounterActions.increment,
  decrement: CounterActions.decrement,
  reset: CounterActions.reset,
}

export default connect(mapState, mapDispatch)(Counter)
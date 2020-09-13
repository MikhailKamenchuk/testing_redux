import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Task extends React.PureComponent {
  render(){
    const { id, text, done, onChange, onDelete } = this.props;
    const classes = classNames("list-item", { "list-item_done": done })
    return (
      <li className={classes}>
        <input
          type="checkbox"
          className="list-item__checkbox"
          defaultChecked={done}
          onChange={() => onChange(id)}
        />
        <span className="list-item__text">{text}</span>
        <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
      </li>
    )
  }
};

// Task.propTypes = {
//   id: PropTypes.string, 
//   text: PropTypes.string, 
//   done: PropTypes.bool.isRequired, 
//   onChange: PropTypes.func.isRequired, 
//   onDelete: PropTypes.func.isRequired
// }

// Task.defaultProps = {
//   id: Math.random(),
//   text: 'Without any text'
// }

export default Task
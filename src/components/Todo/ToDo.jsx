import IconButton from 'components/IconButton/IconButton';
import React from 'react';
import { ReactComponent as DeleteIcon } from '../../Icons/delete.svg';

const ToDo = ({ completed, text, deleteItem, onToggleCompleted }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <IconButton
        className="TodoList__btn"
        onClick={deleteItem}
        aria-label="Delete todo"
      >
        <DeleteIcon width="20" height="20" fill="white" />
      </IconButton>
    </>
  );
};

export default ToDo;

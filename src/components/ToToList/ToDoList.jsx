import classNames from 'classnames';
import './ToDoList.scss';

const ToDoList = ({ todos, deleteItem, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li
            key={id}
            className={classNames('TodoList__item', {
              'TodoList__item--completed': completed,
            })}
          >
            <input
              type="checkbox"
              className="TodoList__checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <p className="TodoList__text">{text}</p>
            <button className="TodoList__btn" onClick={() => deleteItem(id)}>
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;

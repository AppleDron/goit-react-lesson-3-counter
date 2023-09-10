import classNames from 'classnames';
import './ToDoList.scss';
import ToDo from 'components/Todo/ToDo';

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
            <ToDo
              text={text}
              completed={completed}
              onToggleCompleted={() => onToggleCompleted(id)}
              deleteItem={() => deleteItem(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;

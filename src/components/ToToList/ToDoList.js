import './ToDoList.css';

const ToDoList = ({ todos, deleteItem }) => {
  return (
    <ul className="ToDoList">
      {todos.map(({ id, text }) => {
        return (
          <li key={id} className="ToDoList__item">
            <p className="ToDoList__text">{text}</p>
            <button onClick={() => deleteItem(id)}>Видалити</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;

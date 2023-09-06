import { Component } from 'react';
// import { Colorpicker } from "./Colorpicker/Colorpicker";
// import { Counter } from "./Counter/Counter";
// import { Dropdown } from "./Dropdown/Dropdown";
import ToDoList from './ToToList';
import initialTodos from './ToToList/todos.json';
import ToDoEditor from './ToDoEditor/ToDoEditor';
import shortid from 'shortid';
import Filter from './Filter/Filter';
// import Form from './Form/Form';

// const colorPickerOptions = [
//   {label: 'red', color: '#f44336'},
//   {label: 'green', color: '#4caf50'},
//   {label: 'blue', color: '#2196f3'},
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   {label: 'indigo', color: '#3f51b5'},
// ]

export class App extends Component {
  state = {
    todos: initialTodos,
    completed: false,
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  textareaSubmitHandler = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };

  deleteToDo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  onToggleCompleted = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;

    return (
      <div className="App">
        <h1> Стан компонента</h1>

        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <Counter initialValue={5} step={10} /> */}
        {/* <Dropdown /> */}
        {/* <Colorpicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість: {todos.length} </p>
          <p>Кількість виповнених: {this.calculateCompletedTodos()}</p>
        </div>

        <ToDoEditor textareaSubmitHandler={this.textareaSubmitHandler} />

        <Filter value={filter} changeFilter={this.changeFilter} />

        <ToDoList
          todos={this.getVisibleTodos()}
          deleteItem={this.deleteToDo}
          onToggleCompleted={this.onToggleCompleted}
        />
      </div>
    );
  }
}

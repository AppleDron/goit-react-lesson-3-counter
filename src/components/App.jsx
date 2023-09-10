import { Component } from 'react';
// import { Colorpicker } from "./Colorpicker/Colorpicker";
// import { Counter } from "./Counter/Counter";
// import { Dropdown } from "./Dropdown/Dropdown";
import ToDoList from './ToToList';
import initialTodos from './ToToList/todos.json';
import ToDoEditor from './ToDoEditor/ToDoEditor';
import shortid from 'shortid';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import Form from './Form/Form';
import Clock from './Clock/Clock';
import Tabs from './Tabs/Tabs';
import tabs from '../tabs.json';
import IconButton from './IconButton/IconButton';
import { ReactComponent as Addicon } from '../Icons/add.svg';

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
    todos: [],
    completed: false,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

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
    // this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    return (
      <div className="App">
        {/* <Tabs items={tabs} /> */}
        {/* <Clock /> */}
        <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <Addicon width="40" height="40" fill="white" />{' '}
        </IconButton>
        {/* <button type="button" onClick={this.toggleModal}>
          Show modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ToDoEditor textareaSubmitHandler={this.textareaSubmitHandler} />
          </Modal>
        )}
        {/* <h1> Стан компонента</h1> */}

        {/* <Form onSubmit={this.formSubmitHandler} />

        {/* <Counter initialValue={5} step={10} /> */}
        {/* <Dropdown /> */}
        {/* <Colorpicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість: {todos.length} </p>
          <p>Кількість виповнених: {this.calculateCompletedTodos()}</p>
        </div>

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

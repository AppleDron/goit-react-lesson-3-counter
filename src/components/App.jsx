import { Component } from "react";
// import { Colorpicker } from "./Colorpicker/Colorpicker";
// import { Counter } from "./Counter/Counter";
// import { Dropdown } from "./Dropdown/Dropdown";
import ToDoList from "./ToToList";
import initialTodos from './ToToList/todos.json'

// const colorPickerOptions = [
//   {label: 'red', color: '#f44336'},
//   {label: 'green', color: '#4caf50'},
//   {label: 'blue', color: '#2196f3'},
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   {label: 'indigo', color: '#3f51b5'},
// ]

export class App extends Component{
  state = {
    todos: initialTodos,
  }

  deleteToDo = (todoId) => {
    this.setState(prevState => ({todos: prevState.todos.filter(todo => todo.id !== todoId)}))
  }

  render() {
    const { todos } = this.state
    
    const completedTodos = todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0)

    return (
      <div className="App">
        <h1> Стан компонента</h1>

      {/* <Counter initialValue={5} step={10} /> */}
      {/* <Dropdown /> */}
        {/* <Colorpicker options={colorPickerOptions} /> */}
        
        <div>
          <p>Загальна кількість: {todos.length} </p>
          <p>Кількість виповнених: {completedTodos }</p>
        </div>

        <ToDoList todos={todos} deleteItem={this.deleteToDo} />
    </div>
  );
  }
}



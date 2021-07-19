import React from 'react';
import './App.css';

function App() {
  // set the state todos wth setTodos function
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos}></AddTodo>
    </div>
  );
}

function TodoList({todos}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo({setTodos}) {
  function handleAddTodo(event) {
    // to stop the page from refreshing by default
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text: text,
      done: false
    }
    setTodos([todo])
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
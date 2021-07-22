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

  function handleToggleTodo(todo) {
    console.log(todo)
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
        onClick={() => handleToggleTodo(todo)}
        style={{
          textDecoration: todo.done ? 'line-through' : ""
        }}
        key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

function AddTodo({setTodos}) {
const inputRef = React.useRef();

  function handleAddTodo(event) {
    // to stop the page from refreshing by default
    event.preventDefault();
    const text = inputRef.current.value;
    const todo = {
      id: 4,
      text: text,
      done: false
    }
    inputRef.current.value = "";
    setTodos(prevTodos => {
      return prevTodos.concat(todo)
    })
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
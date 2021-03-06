import React from 'react';
import './App.css';

function App() {
  // set the state todos wth setTodos setter function
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos}></AddTodo>
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map(t =>
      todo.id === t.id ? {
        ...t,
        done: !t.done
      } : t
    );
    setTodos(updatedTodos)
  }

  if (!todos.length) {
    return <p>No todos left</p>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? 'line-through' : ""
          }}
          key={todo.id}>
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos}></DeleteTodo>
        </li>
      ))}
    </ul>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      setTodos(prevTodos => {
        return prevTodos.filter(t => t.id !== todo.id);
      })
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer"
      }}>
      x
    </span>
  )
}

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    // to stop the page from refreshing by default
    event.preventDefault();
    const text = inputRef.current.value;
    const todo = {
      id: Math.random(),
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
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
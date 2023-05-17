import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList() {
  
  const [todos, setTodos] = useState([

    {
      id: 1,
      title: "task 1",
    },
    {
      id: 2,
      title: "task 2",
    },
    {
      id: 3,
      title: "task 3",
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  useEffect( ()=>{
    console.log('TodoList component mount');
  } , [])

  const addTodoHandler = () => {
    setTodos([...todos, { id: todos.length + 1, title: newTodo }]);
  };

  const deleteTodo = (todoId) => {
    let newTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodos)
  }

  return (
    <div className="todoListContainer">
      <h1>TodoList</h1>
      <hr />
      <div className="addTodoContainer">
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onRemove={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;

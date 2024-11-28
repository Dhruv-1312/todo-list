import { useState } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {
  const [todos, setTodo] = useState([
    "Go to gym",
    "Eat more fruits",
    "Go Sleep",
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodo(newTodoList)
  }

  function handleDeleteTodos(index) {
    setTodo(todos.filter((_, i) => index !== i));
  }

  function handleTodoEdit(index, newTodo) {
    setTodo(todos.map((todo, i) => i === index ? newTodo : todo
    )
    )
  }

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <TodoInput handleAddTodos={handleAddTodos} />
        <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleTodoEdit={handleTodoEdit} />
      </div>
    </div>
  )
}

export default App

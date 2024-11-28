import { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos } = props;
  const [todoValue, setTodoValue] = useState('');
  return (
    <div className="flex items-center">
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} placeholder="Enter todo..." className="m-4 font-['Press_Start_2P'] px-4 py-4 flex-auto items-stretch border border-gray-300 rounded-md shadow-sm focus:outline-none 
                   focus:ring-2 focus:ring-black focus:border-black focus:ring-offset-2 w-auto"
      />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }} className="font-['Press_Start_2P'] bg-black text-white px-4 py-4 rounded-xl shadow hover:bg-blue-600 transition mx-4">Add</button>
    </div>
  )
}

export default TodoInput

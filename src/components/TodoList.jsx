import { useState } from "react";
import { MdOutlineEditNote, MdOutlineDelete } from "react-icons/md"

export default function TodoList(props) {
    const { todos, handleDeleteTodos, handleTodoEdit } = props;

    const [isEditing, setEditing] = useState(null);
    const [editValue, setEditValue] = useState('');
    return (
        <div>
            {todos.map((e, index) => {
                return <div key={index} className="flex items-center justify-between bg-white mx-4 my-4 px-4 py-4 rounded-xl border border-gray-400 font-semibold">
                    <div className="flex items-center space-x-4">
                        {isEditing === index ? <>
                            <input
                                value={editValue}
                                onChange={(e) => { setEditValue(e.target.value) }}
                                placeholder="Enter new todo..."
                                className="font-['Press_Start_2P'] px-2 py-1 rounded-md focus:ring-2 focus:ring-black focus:border-black focus:ring-offset-2 w-auto"
                            />
                            <button
                                onClick={() => {
                                    handleTodoEdit(index, editValue)
                                    setEditValue("")
                                    setEditing(null);
                                }}
                                className="px-2 py-1 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
                            >
                                Save
                            </button>
                        </> : todos[index]}
                    </div>
                    <div className="flex items-center space-x-">
                        <button onClick={
                            () => {
                                setEditing(index)
                            }
                        } className="ml-4 flex items-center space-x-2"> Edit <span><MdOutlineEditNote className="size-6" /></span></button>
                        <button onClick={() => {
                            handleDeleteTodos(index);
                        }} className="ml-4 flex items-center space-x-2"> Delete <span>
                                <MdOutlineDelete /></span></button>
                    </div>
                </div>
            })}
        </div>
    )
}

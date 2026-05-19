import React, { useState } from 'react'

const TodoForm = ({todoList, setTodoList}) => {
      const [inputValue, setInputValue] = useState({id:"", task:"", checked:false});

        const handleInputChange = (value) => {
    setInputValue({id:value, task:value, checked:false});
  }


      const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.task.trim()) {
      alert("Please enter a task.")
      return;
    }

    const ifTaskMatch = todoList.find((currentTask) => currentTask.task === inputValue.task)

    if(ifTaskMatch){
        alert("You already have this task in your list.")
        return;
    }
    setTodoList((prev) => [...prev, inputValue]);
    localStorage.setItem("todoList", JSON.stringify(todoList))
    setInputValue({id:"", task:"", checked:false});
  }
  return (
      <form onSubmit={handleFormSubmit}>
          <div>
            <input type="text" className="todo-input" value={inputValue.task} onChange={(event) => handleInputChange(event.target.value)} autoComplete="off" />
          </div>
          <div>
            <button type="submit" className="todo-btn">Add Task</button>
          </div>
        </form>
  )
}

export default TodoForm

import React, { useState } from 'react'

const TodoForm = ({todoList, setTodoList}) => {
      const [inputValue, setInputValue] = useState("");

        const handleInputChange = (value) => {
    setInputValue(value);
  }


      const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("Please enter a task.")
      return;
    }
    if (todoList.includes(inputValue)) {
      alert("You already have this task in your list.")
      return;
    }
    setTodoList((prev) => [...prev, inputValue]);
    setInputValue("");
  }
  return (
      <form onSubmit={handleFormSubmit}>
          <div>
            <input type="text" className="todo-input" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} autoComplete="off" />
          </div>
          <div>
            <button type="submit" className="todo-btn">Add Task</button>
          </div>
        </form>
  )
}

export default TodoForm

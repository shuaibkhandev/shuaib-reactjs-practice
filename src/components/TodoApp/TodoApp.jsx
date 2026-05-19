import { useEffect, useState } from 'react';
import './Todo.css';

import TodoDateTime from './TodoDateTime';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {

  const [todoList, setTodoList] = useState(()=>{
    const todoList = localStorage.getItem("todoList");
    return todoList ? JSON.parse(todoList) : [];
  });

  useEffect(()=>{
        localStorage.setItem("todoList", JSON.stringify(todoList))
  },[todoList])

  const handleDeleteTask = (taskToDelet) => {
    alert(`Are you want to delete "${taskToDelet}"`)
    const updatedTodoList = todoList.filter((currentTask)=> currentTask.task !== taskToDelet);
    console.log(updatedTodoList);
    setTodoList(updatedTodoList)
    

  }

  return (
    <section className="todo-container">
      <h1 className="todo-heading">Todo List</h1>
      <TodoDateTime />
      <div className="todo-form-container">
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} handleDeleteTask={handleDeleteTask} setTodoList={setTodoList}/>
      </div>
    </section>
  )
}

export default TodoApp;
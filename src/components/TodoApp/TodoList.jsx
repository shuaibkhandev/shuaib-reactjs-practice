import React from 'react'

import TodoItem from './TodoItem';
const TodoList = ({todoList, handleDeleteTask, setTodoList}) => {
  
  const handleChecked = (checkedTask) => {
const updatedTask = todoList?.map((currentTask)=>{
  if(currentTask.task === checkedTask){

  return  {...currentTask, checked: !currentTask.checked}
  }
  
return currentTask
    

})
  setTodoList(updatedTask)
  }

  return (
  <ul className='todo-list'>
          {todoList.map((currentTask, index) => {
            return (
             <TodoItem key={currentTask.id} checked={currentTask.checked} handleChecked={handleChecked} todoList={todoList} handleDeleteTask={handleDeleteTask} task={currentTask.task} />
            )
          })}
        </ul>
  )
}

export default TodoList

import React from 'react'

import TodoItem from './TodoItem';
const TodoList = ({todoList, handleDeleteTask}) => {
    
  return (
  <ul className='todo-list'>
          {todoList.map((task, index) => {
            return (
             <TodoItem key={index} todoList={todoList} handleDeleteTask={handleDeleteTask} task={task} />
            )
          })}
        </ul>
  )
}

export default TodoList

import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
const TodoItem = ({todoList, handleDeleteTask, task, checked, handleChecked} ) => {
  return (
     <li className='todo-task'>
                <span className={`${checked ? "checked" : "un-checked"}`}>{task}</span>
                <div className='todo-task-icons'>
                  <FaRegCircleCheck className='todo-task-icon check-icon' onClick={()=>handleChecked(task)}/>
                  <TiDeleteOutline className='todo-task-icon delete-icon' onClick={()=>handleDeleteTask(task)} />
                </div>
              </li>
  )
}

export default TodoItem

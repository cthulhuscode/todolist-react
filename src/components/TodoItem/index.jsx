import React from 'react'
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import "./style.css"

const TodoItem = ({todo, toggleCompletion, deleteTodo}) => {
  const { text, completed} = todo;

  return (
    <div className='TodoItem'>
      <li>
        <FaCheckCircle 
          className={`item-check ${completed ? 'completed' : 'uncompleted'}`}
          onClick={() => toggleCompletion(text)} 
        />
        <span className={`${completed ? 'item-text-completed' : ""}`}>{text}</span>
        <FaRegTimesCircle 
          className='item-delete'
          onClick={() => deleteTodo(text)}
        />
      </li>
    </div>
  )
}

export default TodoItem
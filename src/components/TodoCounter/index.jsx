import React from 'react'
import "./style.css"

const TodoCounter = ({totalTodos, completedTodosCount}) => {
  return (
    <div className='TodoCounter'>
      <h2>Has completado {completedTodosCount} de {totalTodos} To-dos</h2>
    </div>
  )
}

export default TodoCounter;
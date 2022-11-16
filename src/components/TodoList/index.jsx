import React from 'react'
import "./style.css"

const TodoList = (props) => {
   return (
    <div className='TodoList'>
      <ul>
        { props.children }
      </ul>
    </div>
  )
}

export default TodoList
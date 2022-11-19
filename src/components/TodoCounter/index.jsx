import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext';
import "./style.css"

const TodoCounter = () => {

  const {todosCount, completedTodosCount} = useContext(TodosContext);

  return (
    <div className='TodoCounter'>
      <h2>Has completado {completedTodosCount} de {todosCount} To-dos</h2>
    </div>
  )
}

export default TodoCounter;
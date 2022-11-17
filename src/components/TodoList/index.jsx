import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext';
import TodoItem from '../TodoItem';
import "./style.css"

const TodoList = () => {
  const { error, loading, searchedTodos } = useContext(TodosContext);

   return (
    <div className='TodoList'>
      <ul>
      { error && <p style={{"color": "red"}}>Lo sentimos, hubo un error: {error.stack}</p> }
      { loading && <p>Cargando...</p> }
      { (!loading && !searchedTodos.length) && <p>Crea tu primer to-do</p>}

      {searchedTodos.map(
        todo => <TodoItem key={todo.text} todo={todo} /> 
      )}
      </ul>
    </div>
  )
}

export default TodoList
import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext';
import TodoItem from '../TodoItem';
import TodosLoading from "../TodosLoading";
import TodosError from '../TodosError';
import TodosEmpty from '../TodosEmpty';
import "./style.css"

const TodoList = () => {
  const { error, loading, searchedTodos } = useContext(TodosContext);

   return (
    <div className='TodoList'>
      <ul>
      { error && <TodosError /> }
      { loading && <TodosLoading /> }
      { (!loading && !searchedTodos.length && !error) && <TodosEmpty />}

      {searchedTodos.map(
        todo => <TodoItem key={todo.text} todo={todo} /> 
      )}
      </ul>
    </div>
  )
}

export default TodoList
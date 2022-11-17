import React from 'react'
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton  from "../CreateTodoButton";
import TodoItem from "../TodoItem";
import { TodosContext } from '../../context/TodosContext';

const AppUI = () => {
  return (
      <div className='container'>
        <h1 className='title'>Todo App</h1>
        <TodoCounter />     

        <TodoSearch />
        
        <TodosContext.Consumer>
          {/* Render props */}
          {({ error, 
              loading,
              searchedTodos,
              toggleCompletion, 
              deleteTodo 
            }) => (
            <TodoList>  
              { error && <p style={{"color": "red"}}>Lo sentimos, hubo un error: {error.stack}</p> }
              { loading && <p>Cargando...</p> }
              { (!loading && !searchedTodos.length) && <p>Crea tu primer to-do</p>}
    
              {searchedTodos.map(
                todo => <TodoItem 
                          key={todo.text} 
                          todo={todo} 
                          toggleCompletion={toggleCompletion}
                          deleteTodo={deleteTodo}
                        /> 
              )}
            </ TodoList>
          )}
        </TodosContext.Consumer>

        <CreateTodoButton /> 
    
      </div>  
    )
}

export default AppUI;


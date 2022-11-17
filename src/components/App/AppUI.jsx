import React from 'react'
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton  from "../CreateTodoButton";
import TodoItem from "../TodoItem";

const AppUI = ({
  loading,
  error,
  todosCount,
  completedTodosCount,
  setSearchVal,
  searchVal,
  searchedTodos,
  toggleCompletion,
  deleteTodo,
}) => {
  return (
      <div className='container'>
        <h1 className='title'>Todo App</h1>
        <TodoCounter 
          totalTodos={todosCount}
          completedTodosCount={completedTodosCount}
        />     

        <TodoSearch 
          setSearchVal={setSearchVal}
          searchVal={searchVal} 
        />
        
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

      <CreateTodoButton /> 
    
      </div>  
    )
}

export default AppUI;


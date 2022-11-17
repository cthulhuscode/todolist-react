import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton  from "../CreateTodoButton";

const AppUI = () => {
  return (
      <div className='container'>
        <h1 className='title'>Todo App</h1>
        <TodoCounter />     

        <TodoSearch />        
    
        <TodoList />

        <CreateTodoButton /> 
      </div>  
    )
}

export default AppUI;


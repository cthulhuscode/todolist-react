import { useContext } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton  from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodosContext } from "../../context/TodosContext";

const AppUI = () => {
  
  const { openModal, setOpenModal } = useContext(TodosContext);

  return (
      <div className='container'>
        <h1 className='title'>Todo App</h1>
        <TodoCounter />     

        <TodoSearch />        
    
        <TodoList />

        {!!openModal && (
          <Modal>
            <h1>Portal</h1>
          </Modal>)
        }

        <CreateTodoButton /> 
      </div>  
    )
}

export default AppUI;


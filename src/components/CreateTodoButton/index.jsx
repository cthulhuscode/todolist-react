import { useContext } from "react";
import "./style.css";
import { TodosContext } from "../../context/TodosContext";

const CreateTodoButton = () => {
  const { setOpenModal, openModal, error, loading } = useContext(TodosContext);

  const onNewTodo = () => {
    setOpenModal(true);
  };

  return <>
    { (!error && !loading) && (
      <button
        className={`CreateTodoButton ${openModal && 'on-modal'}`}
        onClick={() => onNewTodo()}
      >
        New Todo
      </button>
     )}
  </>      
};

export default CreateTodoButton;
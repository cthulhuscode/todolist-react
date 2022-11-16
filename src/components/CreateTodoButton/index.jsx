import React from "react";
import "./style.css";

const CreateTodoButton = () => {
  const onNewTodo = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onNewTodo("TOdo added")}
    >
      New Todo
    </button>
  );
};

export default CreateTodoButton;
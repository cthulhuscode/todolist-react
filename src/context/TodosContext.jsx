import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

/* Al crear el contexto también podemos pasarle 
un valor inicial entre los paréntesis */
export const TodosContext = createContext();

/* El Context devuelve un Provider y un Consumer */
// const { Provider, Consumer } = createContext();

export const TodosProvider = (props) => {
  /* Nos traemos todo el estado y las funciones de
   nuestra aplicación que queremos globales */
  const {
    item: todos,
    loading,
    error,
    setItem: setTodos,
  } = useLocalStorage("todos_v1", [
    { text: "lavar el coche", completed: false },
  ]);

  const [searchVal, setSearchVal] = useState("");

  const completedTodosCount = todos.filter((todo) => !!todo.completed).length;
  const todosCount = todos.length;

  let searchedTodos = [];

  if (searchVal.length >= 1)
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchVal.toLowerCase())
    );
  else {
    searchedTodos = todos;
  }

  const toggleCompletion = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const todosTemp = [...todos];

    let status;
    todosTemp[todoIndex].completed ? (status = false) : (status = true);
    todosTemp[todoIndex].completed = status;

    setTodos(todosTemp);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const todosTemp = [...todos];
    todosTemp.splice(todoIndex, 1);
    setTodos(todosTemp);
  };

  return (
    /* La propiedad value es especial de react y ahí debe
      estar todo lo que se quiera compartir en el context      
    */
    /* Retornamos nuestro proveedor con nuestro context
     en la etiqueta value, que recibirá a toda nuestra
    aplicación, por eso necesitamos la prop children */
    <TodosContext.Provider
      value={{
        error,
        loading,
        todosCount,
        completedTodosCount,
        setSearchVal,
        searchVal,
        searchedTodos,
        toggleCompletion,
        deleteTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

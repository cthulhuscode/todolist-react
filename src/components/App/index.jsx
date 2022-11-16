import { useState } from "react";
import AppUI from "./AppUI";
import "./style.css";

function App() {

  const LOCAL_STORAGE_NAME = "todos_v1";
  const localStorageTodos = localStorage.getItem(LOCAL_STORAGE_NAME);
  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify([]));
    parsedTodos = [];
  }
  else
    parsedTodos = JSON.parse(localStorageTodos);

  const [todos, setTodos] = useState(parsedTodos);
  const [searchVal, setSearchVal] = useState("");  

  const completedTodosCount = todos.filter(todo => !!todo.completed).length;  
  const todosCount = todos.length;  

  let searchedTodos = [];

  if(searchVal.length >= 1)
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchVal.toLowerCase()));
  else{
    searchedTodos = todos;
  }

  const saveTodos = (newTodos) => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const toggleCompletion = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const todosTemp = [...todos];

    let status;
    todosTemp[todoIndex].completed ? status = false : status = true;    
    todosTemp[todoIndex].completed = status;    

    saveTodos(todosTemp);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const todosTemp = [...todos];
    todosTemp.splice(todoIndex, 1)
    saveTodos(todosTemp);
  }

  return (
    <AppUI todosCount={todosCount}
      completedTodosCount={completedTodosCount}
      setSearchVal={setSearchVal}
      searchVal={searchVal} 
      searchedTodos={searchedTodos}
      toggleCompletion={toggleCompletion}
      deleteTodo={deleteTodo}      
    />
  );
}

export default App

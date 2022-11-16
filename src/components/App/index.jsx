import { useState } from "react";
import AppUI from "./AppUI";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([
    {text: "Cortar cebolla", completed: true},
    {text: "Tomar curso de react", completed: false},
    {text: "Llorar con la llorona", completed: true},
  ]);
  const [searchVal, setSearchVal] = useState("");  

  const completedTodosCount = todos.filter(todo => !!todo.completed).length;  
  const todosCount = todos.length;  

  let searchedTodos = [];

  if(searchVal.length >= 1)
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchVal.toLowerCase()));
  else{
    searchedTodos = todos;
  }

  const toggleCompletion = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const todosTemp = [...todos];

    let status;
    todosTemp[todoIndex].completed ? status = false : status = true;    
    todosTemp[todoIndex].completed = status;    

    setTodos(todosTemp);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);    
    const todosTemp = [...todos];
    todosTemp.splice(todoIndex, 1)
    setTodos(todosTemp);
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

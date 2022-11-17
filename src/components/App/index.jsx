import AppUI from "./AppUI";
import "./style.css";
import { TodosProvider } from "../../context/TodosContext";

function App() {
 
  return (
    <TodosProvider>
      <AppUI />
    </TodosProvider>
  );
}

export default App

import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext';
import "./style.css"

const TodoSearch = () => {  
  const {searchVal, setSearchVal} = useContext(TodosContext);

  const onSearch = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className='TodoSearch'>
      <input 
        type="text" 
        placeholder='hacer...'
        onChange={onSearch}
        value={searchVal}
       />
    </div>
  );
}

export default TodoSearch;
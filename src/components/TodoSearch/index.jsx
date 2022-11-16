import { useState } from 'react'
import "./style.css"

const TodoSearch = ({searchVal, setSearchVal}) => {  
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
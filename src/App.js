import React,{useState} from "react";
import './App.css';
import TodosList from "./TodosList";


function App() {
  const[task,setTask]=useState('')
  const[todos,setTodos]=useState([])

  const changeHandler=(e)=>{
    setTask(e.target.value)
  }

  const submitHandler=(e)=>{
   e.preventDefault();
   const newTask =[...todos,task]
   setTodos(newTask);
   setTask('')
  }

  const deleteHandler = (baseIndexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== baseIndexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
<div className='card'>
  <div className='card-body'>
    <div className='card-title'>
    <h6>To do Management App!</h6><br/>
    <form onSubmit={submitHandler}>
      <input type="text" size="30" value={task} name='task' onChange={changeHandler}/> &nbsp;
      <input type="Submit" value="Add" name='Add'/>
    </form>&nbsp;
    <TodosList props={todos} deleteHandler={deleteHandler} />
    </div>
  </div>
</div>
</center>
    </div>
  );
}

export default App;

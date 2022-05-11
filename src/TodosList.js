import React from 'react'

const TodosList = ({props,deleteHandler}) => {
  return (
    <div>{
        props.map((todo,index)=><div key={index}>
            <h5>{todo} &nbsp; <button onClick={()=>{deleteHandler(index)}} size="10"> Remove</button></h5>
        </div>)}
        </div>
  )
}

export default TodosList;
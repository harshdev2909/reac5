import React, { useReducer, useState } from 'react'

const reducer = (state,action)=>{
    console.log(state,action)
    if(action.type ==='incr'){
        return {count : state.count +1}
    }    
}
const UseReducer = () => {


const[state,dispatch] = useReducer
(reducer, {count : 0});

// const[count,setCount] = useState(0);
const plus= ()=>{
    dispatch({type : "incr"});
};
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={plus}>+</button>
    </div>
  )
}

export default UseReducer
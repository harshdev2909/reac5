import React, { useReducer } from 'react'
const initial ={
  data:[],
  error : null
}
function reducer(state,action){
  switch(action.type){
    case 'FETCH_DATA_START':
      return{...state,loading:true};
    case 'FETCH_DATA_SUCCESS':
      return{error:null,data:action.payload}
    case 'DELETE_DATA':
      return{
        ...state,
        data:state.data.filter((item)=>
          item.id != action.payload
        )
      }    
  }
}
export const Form = () => {
  const[state,dispatch] = useReducer(reducer,initial);

const datas = async()=>{
    dispatch({type : 'FETCH_DATA_START'});

    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json()
      dispatch({type:'FETCH_DATA_SUCCESS',
      payload : data})
      console.log(data);
    }
    catch{
      dispatch({
        type : 'FETCH_DATA_FAILURE',
        })
    }
  }
  const deletes =(itemId)=>{
    dispatch({type :'DELETE_DATA',
    payload:itemId})
  }
  return (
    <div>
   <button onClick={datas}>Fetch Data</button>
   <ul>
    {state.data.map((item)=>(
      <li key={item.id}>
        {item.title}
        <button onClick={deletes(item.id)}>Delete</button>
      </li>
     ))} 
    </ul>  
    </div>
  )
}

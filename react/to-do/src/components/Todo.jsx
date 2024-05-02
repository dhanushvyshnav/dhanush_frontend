
import React, { useReducer, useState } from 'react'

const reducer =(state,action)=>{
    switch(action.type){
        case "ADD":
            if (state.some(item => item.id === action.data.id)) {
                return state;
              } else {
                
                return [...state, { ...action.data, complete: false }];
              }
            
        case "UPDATE":
                return state.map(item => {
                  if (item.id === action.data.id) {
                    return { ...item, title: action.data.title };
                  } else {
                    return item;
                  }
                });
    
        case "DELETE":
            return state.filter(item=> item.id!==action.id)
        case "RESET":
            return []
            default:
                return state
    }
}

 const ToDo = () => {
    const [input,setInput]=useState({})
    const [state,dispatch]=useReducer(reducer,[])
  return (
    <div>
        <h1>{JSON.stringify(state)}</h1>
        <input type="text" onChange={(e)=>{setInput({...input,id:e.target.value})}}/>
        <input type="text" onChange={(e)=>{setInput({...input,title:e.target.value})}}/>
        <button onClick={()=>dispatch({type: "ADD",data:input})}>ADD</button>
        <button onClick={()=>dispatch({type: "UPDATE",data:input})}>UPDATE</button>
        <button onClick={()=>dispatch({type: "DELETE",id:input.id})}>DELETE</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
    </div>
  )
};
export default ToDo;


import React, { useState } from 'react'
import datas from "../datas.json"
export const State = () => {
    const [nData,setnData] = useState(datas);
    const remove = (itemId)=>{
        setnData(nData.filter(item =>item.id!==itemId))
    }
    const update  = (itemId)=>{
        setnData(nData.map(items=>{
            if(items.id===itemId) {
                return {name  :" newName"}
            }else{
                return items;
            }
        }))
    }
  return (
    <div>
        <ul>
            

    {    nData.map(ele=>
           <li key={ele.id}>
            {ele.name}
            <br/>
            <button onClick={()=>{update(ele.id)}} >Update</button>
            <button onClick={()=>{remove(ele.id)}} >remove</button>
           </li>
        )
    }
            
           
        </ul>
    </div>
  )
}

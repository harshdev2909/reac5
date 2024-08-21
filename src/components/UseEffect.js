import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    useEffect(()=>{
        console.log("We are in use state");
    },[])
    const[click,setClick] = useState()
  return (
    <div>
        <button onClick={()=>setClick('subscribe')}>Subscribe</button>
        <button onClick={()=>setClick("to")} >TO</button>
        <button onClick={()=>setClick("bot Harsh")}>Bot Harsh</button>
        <h1>{click}</h1>
    </div>
  )
}

export default UseEffect
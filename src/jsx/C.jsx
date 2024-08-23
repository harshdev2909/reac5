import React, { useContext } from 'react'
import { GreetContext } from './A'
import { New } from './A'



export const C = (props) => {
const useCon = useContext(GreetContext);
const useCon2 = useContext(New);
  return (
    <div>
   <h1>Greet : {useCon}</h1>
   <h1>Greet : {useCon2}</h1>
   </div>
  )
}






{/* <GreetContext.Consumer>
        {
            (val)=>{
                return (
                    <New.Consumer>
                        {
                            (ele)=>{
                                return <h1>Greet: {val} ,{ele}</h1>
                            }
                        }
                    </New.Consumer>
                )
                
            }
        }
    </GreetContext.Consumer> */}
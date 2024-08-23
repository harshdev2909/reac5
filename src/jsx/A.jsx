import React, { createContext } from 'react'
import { B } from './B'

const GreetContext = createContext();
const New = createContext();

export const A = () => {
    const greet =  "hello";
    const greet2 = "How Are You?"
  return (
    <div>
        <New.Provider value={greet2}>
        <GreetContext.Provider value={greet}>
        <B/>
        </GreetContext.Provider>
        </New.Provider>
        
    </div>
  )
}

export {GreetContext,New};
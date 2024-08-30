import React, { useState } from 'react'

export const Forms = () => {
const[name,setName] =useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('form submited')
    }
  return (
    <div className='container'>
       <h1>Form Validation</h1>
       <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)}  type='text'/>
        </div>
        <div>
            <label>Email</label>
            <input type='email'/>
        </div>
        <div>
            <label>Password</label>
            <input type='password'/>
        </div>
        <div>
            <label>Confirm Password</label>
            <input type='password'/>
        </div>
        <div>
            <label>Age</label>
            <input type='number'/>
        </div>
        <div>
            <label>Gender</label>
            <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
        </form> 
    </div>
  )
};
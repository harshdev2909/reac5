import React, { useState } from 'react'

export const Forms = () => {
const[name,setName] =useState('');
const [email,setEmail] = useState('');
const [password,setpassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');
const [age,setAge] = useState('');
const[errors,setErrors]=useState('')

const validateForm =()=>{
    const error = {};
    if(!name){
        error.name='name is required'
    }
    if(!email){
        error.name='Email is required'
    }
    console.log(error)
}
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(Object.keys(validate).length>0){
            setErrors(validate);
        }
        const validate = validateForm();
        console.log('form submited')
    }
  return (
    <div className='container'>
       <h1>Form Validation</h1>
       <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)} type='text'/>
            {Error.name}
        </div>
        <div>
            <label>Email</label>
            <input type='email'onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Password</label>
            <input type='password'onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <div>
            <label>Confirm Password</label>
            <input type='password'onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
        <div>
            <label>Age</label>
            <input type='number'onChange={(e)=>setAge(e.target.value)}/>
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
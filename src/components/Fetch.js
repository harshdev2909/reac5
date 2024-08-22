import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const[users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(Response => Response.json())
        .then(data => setUsers(data))
        
    },[])
  return (
    <div>
        <h1>User List</h1>
        <ul>
            {users.map(ele=>{  
            return <li key={ele.id}>
                    <a href={ele.html_url}>{ele.login}</a>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Fetch
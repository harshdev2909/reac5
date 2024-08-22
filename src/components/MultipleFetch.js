import React, { useEffect, useState } from 'react'

const MultipleFetch = () => {
    const[user,setuser] = useState([]);
    const[loading,setLoading]= useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
        async function FetchUser (){
            try {
                const Response = await fetch
                ('https://api.github.com/users')
                const data = await Response.json();
                setuser(data);
                setLoading(false)
            }
            catch(error){
                setError(error);
                setLoading(false);
            }
        }
        FetchUser();

        },[])

        if(loading){
            return <h1>Loading...</h1>
        }
        if(error){
            return <h1>Error : {error.message}</h1>
        }

  return (
    <div>
        <h1>User List</h1>
        <ul>
            {
                user.map(users=>{
                    return <li key={users.id}>
                            {users.login}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default MultipleFetch
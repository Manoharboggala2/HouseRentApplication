import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() 
{
  const [users,setusers]=useState([]);
  useEffect(()=>{

    axios.get(" https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      setusers(response.data);
    })
    .catch(error=>{
            this.setusers(error);
    })
  

  })
  return (
    <table className=" table table-bordered table-striped"  width={"100%"} >
      <thead >
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>UserName</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user=>{
            return <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          })
        }
      </tbody>

    </table>
  )
}

export default App

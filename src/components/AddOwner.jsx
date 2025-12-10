import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddOwner() 
{
    const [owner,setOwner]=useState({name:"",email:""});
    const navigate =useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await API.post("/owners",owner);
        navigate("/owners");
    }


  return (
    <div className='container mt-4'>
        <h2>Add Owner</h2>
        <form onSubmit={handleSubmit} className='w-50'>
            <input type="form-control mb-2" placeholder='Name'
            onChange={(e)=>setOwner({...owner,name:e.target.value})}/>

            <input type="form-control mb-2" placeholder='Email'
            onChange={(e)=>setOwner({...owner,name:target.value})}/>
            <button className='btn btn-primary'> Save</button>
        </form>
      
    </div>
  )
}

export default AddOwner

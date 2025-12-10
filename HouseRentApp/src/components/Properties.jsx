import React, { useEffect, useState } from 'react'
import API from '../services/api';

function Properties() 
{
  const[properties,setProperties]=useState([]);
  useEffect(()=>{
    loadProperties();
  },[]);
  const loadProperties=async()=>{
    const res=await API.get("/properties");
    setProperties(res.data);
  }
  return (
    <div className='container mt-4'>
      <h2>Properties</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Address</th>
            <th>Location</th>
            <th>BHK</th>
            <th>Rent</th>
            <th>Furnished</th>
            <th>Description</th>
            <th>OwnerId</th>
            <th>OwnerName</th>
            <th>OwnerEmail</th>
            <th>OwnerPhone</th>

          </tr>
        </thead>
        <tbody>
          {
            properties.map(p=>{
              return(
              <tr key={p.id}>
                            <td>{p.Id}</td>
                            <td>{p.title}</td>
                            <td>{p.address}</td>
                            <td>{p.location}</td>
                            <td>{p.bhk}</td>
                            <td>₹{p.rent}</td>
                            <td>{p.furnished ? "✔" : "—"}</td>
                            <td>{p.description}</td>
                            <td>{p.owner?.id}</td>
                            <td>{p.owner?.name}</td>
                            <td>{p.owner?.email}</td>
                            <td>{p.owner?.phone}</td>

                
              </tr>
              )
            })
          }
        </tbody>

      </table>
      
    </div>
  )
}

export default Properties

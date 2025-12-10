import React, { useEffect, useState } from 'react'
import API from '../services/api'

function Bookings() 
{
  const[bookings,setBookings]=useState([]);
  useEffect(()=>{
    loadBookings();
  },[]);
  const loadBookings=async ()=>{
    const  res=await API.get("/bookings");
    setBookings(res.data);
  }
  return (
    <div className='container mt-4'>
      <h2>Bookings</h2>
      <table className='table table bordered '>
        <thead>
          <tr>
            <th>ID</th>
             <th>Property Name</th>
              <th>Location</th>
               <th>Owner Name</th>
                <th>User Name</th>
                <th>User Phone</th>
                <th>Visit Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b=>{
            return(

            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.property?.title}</td>
              <td>{b.property?.location}</td>
              <td>{b.property?.owner?.name}</td>

              <td>{b.userName || "Not Provided"}</td>
              <td>{b.visitDate ||"Not Provided"}</td>
              <td>{b.visitDate||"Not Scheduled"}</td>

            </tr>
            )
          })

            
          }
        </tbody>

      </table>
      
    </div>
  )
}

export default Bookings

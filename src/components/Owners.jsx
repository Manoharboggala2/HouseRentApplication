import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import API from '../services/api';

export default function Owners() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    loadOwners();
  }, []);

  const loadOwners = async () => {
    try {
      const res = await API.get("/owners");
      setOwners(res.data);
    } catch (error) {
      console.error("Error loading owners:", error);
    }
  };

  return (
    <div className='container mt-4'>
      <h2>Owners</h2>
      <Link to="/add-owner" className='btn btn-success mb-3'>Add Owner</Link>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {owners.map(o => (
            
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.name}</td>
              <td>{o.email}</td>
              <td>{o.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

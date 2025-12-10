import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Owners from './components/Owners'
import Properties from './components/Properties'
import Bookings from './components/Bookings'
import AddOwner from './components/AddOwner'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/owners" element={<Owners />} />
      <Route path="/add-owner" element={<AddOwner/>}/>
      <Route path="/properties" element={<Properties />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
    </>
  )
}

export default App

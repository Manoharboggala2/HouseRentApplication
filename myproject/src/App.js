import React, { useState } from 'react'

function App() 
{
  const[color,setColor]=useState('orange');


  return (
    <center>
    <div style={{background:color, padding:'30px', height:'100vh'}}>
      <h2>{color}</h2>
      <button  onClick={()=>setColor('yellow')}>yellow</button>
      <button onClick={()=>setColor('red')}>Red</button>
      <button onClick={()=>setColor('green')}>Green</button>
    </div>
    </center>
  )
}

export default App

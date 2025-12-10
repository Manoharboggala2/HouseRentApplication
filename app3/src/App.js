import React, { useEffect, useState } from 'react'

function App() 
{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    alert("this is my alert");
  },[])
  return (
    <div>
      <h1>useEffect:Show alert Once Only</h1>
      <p1>Count:{count}</p1>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
      <p>Click the Button Should not Show Agian</p>
      
    </div>
  )
}

export default App

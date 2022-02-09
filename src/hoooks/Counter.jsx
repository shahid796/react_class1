import React, { useState } from 'react'

export default function Counter() {
    const [counter,setcounter]=useState(0)

  return (
    <div>
        <h1>counter</h1>
        <button onClick={()=>{setcounter(counter+1)}}>+</button><br />
        <h3>{counter}</h3>
        <button onClick={()=>{setcounter(counter-1)}}>-</button>
    </div>
  )
}

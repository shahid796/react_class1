import React, { useState } from 'react'

export default function Customhook(initialvalue) {
    const[value,setvalues]=useState(initialvalue)

    return[
        value,
        (event)=>{
            setvalues({...value,[event.target.name]:event.target.value})
        }
    ]
  
}

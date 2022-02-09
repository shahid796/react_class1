import React, { useEffect, useState } from 'react'
import Customhook from './Customhook'
import Demo from './Demo'



export default function Test() {
    const[demo,setdemo]=useState(true)
    const [values,setvalues]=Customhook({
        name:"",
        email:""
    })
   
    // const [name,setname]=useState("")
    // const [email,setemail]=useState("")
  //  console.log(name)
  console.log(values.name)
  return (
    <div>
        {/* <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/><br />
        <input type="text" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/> */}
        <input type="text" name="name" value={values.name} onChange={setvalues} />
        <input type="text" name="email" value={values.email} onChange={setvalues} />

        {demo==true?<Demo/>:null}
        <button onClick={()=>{setdemo(!demo)}}>toggle</button>
      
        
    </div>
  )
}

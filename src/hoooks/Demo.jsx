import React,{useEffect} from 'react'

export default function Demo() {
    useEffect(()=>{
        console.log("running")
        return()=>{
            console.log("unmount")
        }
    },[])
  return (
    <div>useeffect component</div>
  )
}

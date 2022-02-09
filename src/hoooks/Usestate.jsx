import React, { useState } from 'react';

const Usestate = () => {
    const[value,setvalue]=useState("working")

    // const change=()=>{
    //     setvalue("working is done")
    // }
    return (
        <div>
            <h1>usestate {value}</h1>
            <button onClick={()=>{setvalue("working is done")}}>click</button>
        </div>
    );
}

export default Usestate;

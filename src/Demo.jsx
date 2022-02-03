import React from "react";

function Demo(props){
    return(
        <div>
            <h1>{props.name} details</h1>
           <label htmlFor="">email address</label>
           <input type="text" /><br />
           <textarea name="" id="" cols="30" rows="10"></textarea>
           <button>send</button>
        </div>
    )
}
export default Demo;
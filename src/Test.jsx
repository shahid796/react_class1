import React,{Component} from "react";


 class Test extends Component{
     constructor(props){
         super(props)
         this.state={
             test:"hello"
         }
     }
     change(){
         setTimeout(()=>{
             this.setState((prev,props)=>({test:prev.test="hello world.."}))
         },2000)
     }
     render(){
         this.change()
        //  console.log("rerendering..")
         return(
             <div>
               <h1>state manage </h1>
               <p>{this.state.test}</p>
             </div>
         )
     }
 }
 export default Test;
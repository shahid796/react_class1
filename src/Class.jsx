import React,{Component} from "react";

class Class extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>class component {this.props.name}</h1>
            </div>
        )
    }
}
export default Class;
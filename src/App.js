import logo from './logo.svg';
import './App.css';
import react from 'react';
import Home from './Home';
import Demo from './Demo'
import Props from './Props';
import Class from './Class';
// import Test from './Test';
import Usestate from './hoooks/Usestate';
import Counter from './hoooks/Counter';
import Test from './hoooks/Test';

function App() {

  return (
    <div>               
      <h1>react app</h1>
     
      {/* <Props id={4}/> */}
      {/* <Props obj={{name:"abc",age:34}}/> */}
      {/* <Props arr={["abc","bbc"]}/> */}
      {/* <Class name=" is running"/>
      <Test /> */}
      <Usestate></Usestate>
      <Counter/>
      <Test></Test>
    
       

     
      </div> 
  
      
    
  );
}

export default App;

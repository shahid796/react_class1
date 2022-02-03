import logo from './logo.svg';
import './App.css';
import react from 'react';
import Home from './Home';
import Demo from './Demo'

function App() {
 var name="arun"
 var age = 16
  return (
    <div>               
      <h1>react app</h1>
      <p>welcome {name}</p><br />
      <p>your age is {age} {age >= 18?"eligible":"not eligible"} for voting</p>
      <Demo name="teacher"/>
      <Home text="props working" test="second value of props"/>
      <Demo name="student"/>
     
      
    
       

     
      </div> 
  
      
    
  );
}

export default App;

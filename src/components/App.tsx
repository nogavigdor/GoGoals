import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Goal} from '../Interfaces/GoalInterface';
import Navbar from './Navbar';
import '../sass/App.css';

//This is the main parent  function which will manage the rest of the 
//child functions by passing state variables and functions. 
const App: React.FC = () =>{
  //declaration of a state goal variable which will hold the new goal object
  const [goal, setGoal]=useState<string>("");
  //AllGoals is defined to be a set of arrays which will contains the goal objects
  const [allGoals, setAllGoals]=useState<Array<Goal>>([]);

  return (
    <>
       
        <div className= "App">
      
          Hello from Noga
          <Navbar />
        </div>
    </>//An outer element wrapper
  
  );
};  

export default App;

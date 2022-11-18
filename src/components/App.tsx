import React, {FC, ChangeEvent, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Goal} from '../Interfaces/GoalInterface';
import Navbar from './Navbar';
import InputForm from './InputForm';
import '../sass/App.css';

//This is the main parent  function which will manage the rest of the 
//child functions by passing state variables and functions. 
//App is of type FC (functional component)
const App: FC = () =>{
  //declaration of a state goal variable which will hold the new goal string we get from the input field
  const [goal, setGoal]=useState<string>("");
  //declaration of state deadline variable that will hold the deadline input number we get from the input field
  const [deadline, setDeadline]=useState<number>(0);
  //AllGoals is defined to be a set of arrays which will contains the all the goals = an array of objects
  const [allGoals, setAllGoals]=useState<Array<Goal>>([]);
  //this function will update the goal and deadline states with their respective input fields
  //the type annotation of the event parameter is the TheChange event type, which has a target property which reffers to the element.
  //Since the function doesn't return anything, it's return type annoration is void.
  const handleChange = (event:ChangeEvent<HTMLInputElement>):void=>{

    if(event.target.name="goal") {
      setGoal(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }

  }

  const addGoal = ():void => {

  }

  return (
    <>
      <Navbar/>
       <InputForm  />
    </>//An outer element wrapper
  
  );
};  

export default App;

import React, {ChangeEvent, useState} from 'react';
import ReactDOM from 'react-dom/client';
import GoalI from '../Interfaces/GoalI';
import Navbar from './Navbar';
import InputForm from './InputForm';
import '../sass/App.css';

//This is the main parent  function which will manage the rest of the 
//child functions by passing state variables and functions. 
//App is of type FC (functional component)
const App = () =>{
  //declaration of a state goal variable which will hold the new goal string we get from the input field
  const [goal, setGoal]=useState<string>("");
  //declaration of state deadline variable that will hold the deadline input number we get from the input field
  const [deadline, setDeadline]=useState<number>(0);
  //AllGoals is defined to be a set of arrays which will contains the all the goals = an array of objects
  const [allGoals, setAllGoals]=useState<Array<GoalI>>([]);
  //this function will update the goal and deadline states with their respective input fields
  //the type annotation of the event parameter is the TheChange event type, which has a target property which reffers to the HTML Input element.
  //Since the function doesn't return anything, it's return type annoration is void.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void=>{
    //if it is the goal field input, the goal state should be updated
    if(event.target.name="goal") {
      setGoal(event.target.value);
    //other wise the deadline state should be updated with the deadline input
    } else {
      setDeadline(Number(event.target.value));
    }

  }
  //when the use press the submit button a goal will be added to the goals list
  //This function receives and event of form event type which is target in html from Element.
  const addGoal = (event: React.FormEvent<HTMLFormElement>):void => {

  }

  return (
    <>
      <Navbar/>
      {/*passing the handle events functions as props */}
       <InputForm handleChange={handleChange} addGoal={addGoal}/>
    </>//An outer element wrapper
  
  );
};  

export default App;

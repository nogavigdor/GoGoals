import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import IGoal from '../Interfaces/IGoal';
import Navbar from './Navbar';
import InputForm from './InputForm';
import '../sass/App.css';
import ShowGoals from './ShowGoals';


//This is the main parent  function which will manage the rest of the 
//child functions by passing state variables and functions. 

const App  = () =>{
  //declaration of a state goal variable which will hold the new goal string we get from the input field
  const [goal, setGoal]=useState<string>("");
  //declaration of state deadline variable that will hold the deadline input number we get from the input field
  const [deadline, setDeadline]=useState<number>(0);
  //GoalsList is defined to be a set of arrays which will contains the all the goals = an array of objects of IGoal type
  const [GoalsList, setGoalsList]=useState<IGoal[]>([]);
  
  
  //this function will update the goal and deadline states with their respective input fields
  //the type annotation of the event parameter is the TheChange event type, which has a target property which reffers to the HTML Input element.
  //Since the function doesn't return anything, it's return type annoration is void.
  /**
   * 
   * @param event 
   * @returns void
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void=>{
    //if it is the goal field input, the goal state should be updated
    if(event.target.name==="goal") {
      setGoal(event.target.value);
    //other wise the deadline state should be updated with the deadline input
    } else {
      //assigning the deadline inputninto a const variable
      const deadlineInput=Number(event.target.value);
      //preventing the user from entering a negative number as a deadline
      setDeadline(deadlineInput>=0?deadlineInput:0);
    }

  }
  //when the user press the submit button a goal will be added to the goals list
  //This function receives an event of form event type which is target in html from Element.
  /**
   * 
   * @param event of html input type
   * @returns void
   */
  const addGoal = (event: React.FormEvent<HTMLFormElement>):void => {
    //prevent the default action of the submit button so the screen will not be refreshed
        event.preventDefault();
        const newGoal={id:uuid(), goal:goal, deadline:deadline, isCompleted:false};
        setGoalsList([...GoalsList, newGoal]);
        console.log(GoalsList);
        //initializing the goal state towards a new goal entery
        setGoal("");
        //initializing the deadline state towards a new entery
        setDeadline(0);
  }
 /**
  * 
  * @param goalToDelete will delete the goal from the GoalsList according the string 
  * parameter which represents the id of the goal which is to be deleted.
  */
  const deleteGoal=(goalToDelete:string):void=>{
    setGoalsList(
      GoalsList.filter((goal)=>{
        return goal.id!==goalToDelete;
      }
        )
       

    );
      
  }


/**
 * The function creates a new GoalsList with the updated isCompleted property 
 * which is false for en uncompleted goal and true for a completed goal
 * @param goalCompleted is and id of the goal that was completed
 * @returns void
 */

  const completeGoal=(goalCompleted:string):void=>{

        const newGoalsList = GoalsList.map((goal) => {
          if(goal.id === goalCompleted){
            return {...goal, isCompleted: !goal.isCompleted}
          } else {
             return {...goal}
          }
       });  
       
       setGoalsList(newGoalsList);
  }

  return (
    <>
      <Navbar/>
      <article className='content'>
          <h1>Plan your goals:</h1>
        {/*passing the handle events functions and state variables as props */}
          <InputForm handleChange={handleChange} addGoal={addGoal} goal={goal} deadline={deadline}/>
          <ShowGoals GoalsList={GoalsList} deleteGoal={deleteGoal} completeGoal={completeGoal}/>
      </article>
  
    </>//An outer element wrapper
  
  );
};  

export default App;

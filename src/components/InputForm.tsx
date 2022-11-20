import React from 'react';
import ReactDOM from 'react-dom/client';
import IFormProps from '../Interfaces/IFormProps';


  /**
   * 
   * @param {handleChange, addGoal} is of type IFormProps Interface (which has two functions properties 
   * that handles onChange and onSubmit events respectivelty - more info at src/Interfaves/FormPropsI.ts )
   * @returns A form JSX element
   */

const InputForm=({handleChange, addGoal, goal, deadline}:IFormProps):JSX.Element=>{
    //The function returns a form  with inputs for a new task and it's deadline. As the user type 
    //the inputs, the state variables (goal and deadline) are being updated. 
    //When the user press the submit button, the addGoal function is being call and a newGoal object
    //is being added to the GoalsList objects Array.
    
    return (
       
          <form onSubmit={addGoal} className="form-newgoal">
                <input onChange={handleChange} value={goal} name="goal" className="form-newgoal-input"  type="text" placeholder="Please enter your new goal" />
                <input onChange={handleChange} value={deadline} name="deadline" className="form-newgoal-input"  type="number" placeholder="Please enter the deadline (in days)" />
                <button  type="submit">GoGoal</button>
           </form>
       
          
        );

};

export default InputForm;
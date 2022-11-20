import React from 'react';
import { TfiPencil } from 'react-icons/tfi';
import { TfiTrash } from 'react-icons/tfi';
import ReactDOM from 'react-dom/client';
import IGoal from '../Interfaces/IGoal';
import IShowGoals from '../Interfaces/IShowGoals';

/**
 * 
 * @param {GoalsList, deleteGoal} is of type of IShowGoals which hold
 * the GoalsList array of IGoals objects and DeleteGoal which is a function 
 * @returns 
 */
const ShowGoals = ({GoalsList, deleteGoal}:IShowGoals):JSX.Element=>{
  /*
   * AllGoals will hold the reformated presentation of the Goalslist along with onClick functions
    *  which will trigger either delete or completion of a goal
   */
    const allGoals=GoalsList.map((item:IGoal)=>{
       return  <div className='goal-content' key={item.id}>
          <span>{`${item.goal} to be completed in ${item.deadline} days.`} </span>
          <span className='buttons-container'>
            <button onClick={()=>{ 
              deleteGoal(item.id);
            }}> <TfiTrash className='icon icon-trash'/></button>
            <button><TfiPencil className='icon icon-edit'/></button>
          </span>
       
          </div>
    });
    return (
      <div className='show-goals'>
               <ul>
                  
                  {allGoals}
               </ul>

      </div>
 
    );
}

export default ShowGoals;
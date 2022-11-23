import React from 'react';
//import { TfiPencil } from 'react-icons/tfi';
import { TfiTrash } from 'react-icons/tfi';
import { TfiCheck } from 'react-icons/tfi';
import { TfiBackRight } from "react-icons/tfi";
//import ReactDOM from 'react-dom/client';
import IGoal from '../Interfaces/IGoal';
import IShowGoals from '../Interfaces/IShowGoals';

/**
 * 
 * @param {GoalsList, deleteGoal, completeGoal} is of type of IShowGoals which holds
 * the GoalsList array of IGoals objects, DeleteGoal function  and completeGoal function
 * @returns 
 */
const ShowGoals = ({GoalsList, deleteGoal, completeGoal}:IShowGoals):JSX.Element=>{

    return (
      <div className='show-goals'>
        <ul>
                  {
                      /*
   * AllGoals will hold the reformated presentation of the Goalslist along with onClick functions
    *  which will trigger either delete or completion of a goal
   */
                        GoalsList.map((item:IGoal)=>{
                          return  <div className='goal-content' key={item.id}>
                            <span className={item.isCompleted ?  'linethrough-true':''}>{`${item.goal} to be completed in ${item.deadline} days.`} </span>
                            <span className='buttons-container'>
                            <button onClick={()=>{ 
                                deleteGoal(item.id);
                              }}> <TfiTrash className='icon icon-trash'/></button>
                              <button onClick={()=>{ 
                                completeGoal(item.id);}}><TfiCheck className={`${item.isCompleted?'hide':''} icon icon-check`}/><TfiBackRight className={`${item.isCompleted?'':'hide'} icon icon-check-undo`}/></button>
                            </span>
                          
                            </div>
                     })
             
                  }

               </ul>       

      </div>
 
    );
}

export default ShowGoals;
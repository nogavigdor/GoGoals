import React from 'react';
import { TfiPencil } from 'react-icons/tfi';
import { TfiTrash } from 'react-icons/tfi';


import ReactDOM from 'react-dom/client';
import IGoal from '../Interfaces/IGoal';
import IListGoals from '../Interfaces/IListGoals';


const ShowGoals = ({GoalsList}:IListGoals):JSX.Element=>{
    const allGoals=GoalsList.map((item:IGoal)=>{
       return  <div className='goal-content' key={item.id}>
          <span>{`${item.goal} to be completed in ${item.deadline} days.`} </span>
          <span className='buttons-container'>
            <button><TfiTrash className='icon icon-trash'/></button>
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
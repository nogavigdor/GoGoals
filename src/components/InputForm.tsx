import React from 'react';
import ReactDOM from 'react-dom';
import FormPropsI from '../Interfaces/FormPropsI';


  

const InputForm=({handleChange, addGoal}:FormPropsI):JSX.Element=>{

    return (
            <form onSubmit={addGoal} className="form-newgoal">
                <input onChange={handleChange} name="goal" className="form-newgoal-input"  type="text" placeholder="Please enter your new goal" />
                <input onChange={handleChange}  name="deadline" className="form-newgoal-input"  type="number" placeholder="Please enter the deadline (in days)" />
                <button  type="submit">GoGoal</button>
           </form>
        );
    

};

export default InputForm;
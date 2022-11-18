import React from 'react';
import ReactDOM from 'react-dom';
//import
const InputForm=()=>{


    return (
            <form className="form-newgoal">
                <input onChange={handleChange} name="goal" className="form-newgoal-input"  type="text" placeholder="Please enter your new goal" />
                <input onChange={handleChange} name="deadline" className="form-newgoal-input"  type="number" placeholder="Please enter the deadline (in days)" />
                <button onClick={addGoal}>GoGoal</button>
           </form>
        );
    

};

export default InputForm;
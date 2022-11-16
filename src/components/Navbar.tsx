import React from 'react';
import ReactDom from 'react-dom/client';


const Navbar:React.FC =()=>{
    return(
        <nav className='nav'>
            <div className='logo'>
                GoGoals
            </div>
        </nav>
    );
}

export default Navbar;
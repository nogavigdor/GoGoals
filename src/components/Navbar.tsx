import React from 'react';
import { TfiPrinter } from 'react-icons/tfi';


const Navbar =():JSX.Element=>{
    return(
        <nav className='nav'>
            <div className='logo'>
                GoGoals
            </div>
            <TfiPrinter className='icon icon-printer'/>
        </nav>
    );
}

export default Navbar;
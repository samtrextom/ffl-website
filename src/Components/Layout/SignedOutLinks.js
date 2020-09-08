import React from 'react'
import {NavLink} from 'react-router-dom'

const SingedOutLinks =()=>{
    return(
        <ul className="right desktop-links">
            <li className='desktop-links'><NavLink to='/signup'>Sign Up</NavLink></li>
            <li className='desktop-links'><NavLink to='/signin'>Log In</NavLink></li>
        </ul>
    )
}

export default SingedOutLinks
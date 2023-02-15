import React from 'react'
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>navbar</div>
        <div className='nav'> 
            <ul>
                <Link to="/Home">Home</Link>
                <Link to="/AddProduct">AddProduct</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
            </ul>
        </div>
    </div>
  )
}

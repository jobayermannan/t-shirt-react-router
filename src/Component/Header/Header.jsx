import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <nav className='header'>
             <Link to="/" >Home</Link>
             <Link to="/order" >Order Review</Link>
             <Link to="/contact" >Contact</Link>
             <Link to="/about" >About</Link>
        </nav>
    );
};

export default Header; <h3> This is Header Component</h3>
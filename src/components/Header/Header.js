import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>React Nested Routing</h2>
            <nav className='nav-bar'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/posts' >Post</NavLink>
                <NavLink to='/about' >About</NavLink>
            </nav>
        </div>
    );
};

export default Header;
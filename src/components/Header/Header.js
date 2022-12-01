import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/posts' >Post</NavLink>
                <NavLink to='/about' >About</NavLink>
            </nav>
        </div>
    );
};

export default Header;
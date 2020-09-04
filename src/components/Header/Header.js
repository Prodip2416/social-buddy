import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/post">Home</a>
                <a href="/post">Post</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;
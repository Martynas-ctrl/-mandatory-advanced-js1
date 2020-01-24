import React from 'react';
import { Link } from 'react-router-dom';

//Here in header I use Link to return the user to 'login' screen
 function Header() {
    return (
        <header style={headerStyle}>
            <h1>Front-End Chat</h1>
            <Link style={linkStyle} to='/'>Close</Link> 
        </header>
    )
}

//Styling for header
const headerStyle = {
    background: '#383838',
    color: 'White',
    textAlign: 'center',
    padding: '10px'
}

//Styling for link
const linkStyle = {
    color: 'white',
}
export default Header;

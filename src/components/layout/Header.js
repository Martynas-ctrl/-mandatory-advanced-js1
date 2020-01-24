import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route  } from 'react-router-dom';


 function Header() {
    return (
        <Router>
        <div>
        <header style={headerStyle}>
            <h1>Front-End Chat</h1>
            <Link to='/'>Close</Link> 
        </header>
       </div>
       </Router>
    )
}

const headerStyle = {
    background: 'red',
    color: 'White',
    textAlign: 'center',
    padding: '10px'
}
export default Header;

 //  <header style={headerStyle}>
        //  <h1>Front-End Chat</h1>
        //  <Link to='/'>Exit</Link> |  <Link 
        //  to='/Login'>Login</Link>
        // </header>
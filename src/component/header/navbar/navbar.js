import React from 'react';

import './navbar.css';

const NavBar = (props) => {
    return(
        <div className="navbar">

            <div className="sites"
                onClick={(e) => props.addFilter("sites", e)}
            >Design + Code</div>
            
            <div className="games"
                onClick={(e) => props.addFilter("games", e)}
            >Games + Animation</div>
            
            <div className="writing"
                onClick={(e) => props.addFilter("writing", e)}
            >Writing + Theater</div>
            
            <div className="about"
                onClick={(e) => props.addFilter("bio", e)}
            >Who's This Guy</div>
        </div>
    )
}

export default NavBar;
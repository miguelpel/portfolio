import React from 'react';

import Logo from './logo/logo';
import Name from './name/name';
import NavBar from './navbar/navbar';

const Header = (props) => {
    const style = {
        padding:'20px 30px'
    }

    const logoNameStyle = {
        paddingBottom: '30px'
    }

    return(
        <div style={style}>
            <div style={logoNameStyle}>
                <Logo />
                <Name />
            </div>
            <NavBar
                addFilter={props.addFilter}
            />
        </div>
    )
}

export default Header;
import React from 'react';

import Logo from './logo/logo';
import Name from './name/name';

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
        </div>
    )
}

export default Header;
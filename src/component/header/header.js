import React from 'react';

import Logo from './logo/logo';
import Name from './name/name';

import './header.css';

const Header = () => {
	return (
		<div className="header_container">
			<div className="header_content">
				<Logo />
				<Name />
			</div>
		</div>
	);
};

export default Header;

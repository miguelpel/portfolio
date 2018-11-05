import React from 'react';

import './name.css';

const Name = () => {
	const redStyle = {
		color: '#9a0007',
		fontFamily: 'Dosis',
		display: 'block',
		fontSize: '1.5rem',
		paddingTop: '2px'
	};

	return (
		<div className="name">
			<h1>MIGUEL PELLETERAT</h1>
			<h2 style={redStyle}>ĐESIGNER / DEVEL0PER</h2>
		</div>
	);
};

export default Name;

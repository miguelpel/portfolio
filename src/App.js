import React from 'react';
import './App.css';

import Header from './component/header/header';
// import PageBody from './component/body/bodycontainer/bodyContainer';
import PageBody from './component/body/bodycontainer/animatedBodyContainer';
// import PageBody from './component/body/bodycontainer/testBody';

const App = () => {
	return (
		<div className="App">
			<Header />
			<PageBody />
		</div>
	);
};

export default App;

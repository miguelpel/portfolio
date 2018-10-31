import React, { Component } from 'react';
import './App.css';

import Header from './component/header/header';
import Fonts from './component/fonts/fonts';
import Line from './component/lines/line';
// import PageBody from './component/body/bodycontainer/bodyContainer';
import PageBody from './component/body/bodycontainer/animatedBodyContainer';
// import PageBody from './component/body/bodycontainer/testBody';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filter:''
    }
  }

  addFilter = (filter) => {
    //console.log(filter)
      this.setState({
        filter: filter
      }, () => {console.log(this.state.filter)})
  }

  render() {
    // console.log(this.state.filter)
    return (
      <div className="App">
        <Header
          addFilter={this.addFilter}
        />
        <Line />
        <PageBody
          filter={this.state.filter}
        />
        {/* <Fonts/> */}
      </div>
    );
  }
}

export default App;

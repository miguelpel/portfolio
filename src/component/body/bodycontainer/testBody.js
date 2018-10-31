import React, { Component } from 'react';

import './bodyContainer.css';

import posed from 'react-pose';

const AnimatedCard = posed.div({
    enter: { y: '0',
    transition: ({ delay }) => ({ delay: (delay * 100) + 600, ease: 'easeOut', duration: 800  })},
    exit: { y: '150vh',
    transition: ({ delay }) => ({ delay: (delay * 100), ease: 'easeIn', duration: 800  })},
  });

class PageBody extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <AnimatedCard
                pose={this.state.visible ? "enter" : "exit"}
                onMouseEnter={() => this.setState({ visible: true })}
                onMouseLeave={() => this.setState({ visible: false })}
            >
                Hey
            </AnimatedCard>
        )
    }
}

export default PageBody;
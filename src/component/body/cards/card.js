import React, { Component} from 'react';

import posed, { PoseGroup } from 'react-pose';

import './card.css';

const AnimatedCard = posed.div({
    enter: { y: '0',
            opacity: '1',
            transition: ({ delay }) => ({ delay: (delay * 100) + 600, ease: 'easeOut', duration: 800  })},
    exit: { y: '150vh',
            opacity: '0',
            transition: { delay: 0, ease: 'easeIn', duration: 800 }},
    });

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible:false
        }
    }

    componentDidMount() {
        console.log("card mount")
          this.setState({
            isVisible: !this.state.isVisible
    })}

    componentWillUnmount() {
        console.log("hide")
        this.setState({
            isVisible: false
    })
    }
      
    hide = () => {
        console.log("hide")
        this.setState({
            isVisible: false
    })
    }

    show() {
        console.log("show")
        this.setState({
            isVisible: true
    })
    }
    
    render() {
        const { data } = this.props;
        console.log("render card")
        return(
            <AnimatedCard
                delay={this.props.delay}
                pose={this.state.isVisible ? 'enter' : 'exit'}
                onClick={(e) => this.props.setUniqCard(data.id, e)}
                className="card"
                // hide={this.hide}
            >
                <img alt={`${data.title} image`} src={data.images[0]} />
                <h3>{data.title}</h3>
                <p>{data.tag}</p>
            </AnimatedCard>
        )
    }
    
}

export default Card;
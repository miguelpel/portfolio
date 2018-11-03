import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

import "./sliderImage.css";

class SliderImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
    }

    showDiv = (e) => {
        console.log("show div")
        this.setState({
            show:!this.state.show ? true : false
        })
    }

   render() {
        return(
            <CSSTransition
                in={this.props.show}
                timeout={1000} 
                classNames="sliderItem"
            >
                <img className={`sliderItem ${this.props.show ? 'visible' : 'invisible'}`}
                    src={this.props.url}
                    alt={`${this.props.title} ${this.props.number}`}
                />
            </CSSTransition>
        )
    }

}

export default SliderImage;

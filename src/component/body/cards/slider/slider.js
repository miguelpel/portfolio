import React, { Component } from "react";
import SliderImage from './sliderImage';

import "./slider.css";

class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            imagesUrls: this.props.images,
            index: 0,
            timer: null
        }
    }

    componentDidMount = () => {
        this.setState({
            timer: setInterval(() => (this.changeSlide('right')), 3000)
        })
    }

        componentWillUnmount = () => {
        clearInterval(this.state.timer);
    }

    showPicture = () => {
        return this.state.imagesUrls.map((item, i) => (
            <SliderImage
                url={item}
                key={i}
                title={this.props.title}
                show={i === this.state.index ? true : false}/>
        ))
    }

    changeSlide = (direction) => {
        switch(direction) {
            case "left":
            this.setState({
                index: this.state.index === 0
                ? this.state.imagesUrls.length - 1
                : this.state.index - 1
            })
            break;
            case "right":
            this.setState({
                index: this.state.index < this.state.imagesUrls.length - 1
                ? this.state.index + 1
                : 0
            })
           
            break;
            default:
            console.log("default image")
        }
    }

    toggleIndex = () => {
        let newIndex = this.state.index < this.state.imagesUrls.length - 1
        ? this.state.index + 1
        : 0

        this.setState({
            index: newIndex
        })
    }

   render() {
        return(
                <div className="sliderContainer">
                    <i className="left" onClick={(e) => {this.changeSlide("left");
                                                    clearInterval(this.state.timer)
                                                    }}></i>
                    <div
                        className="sliderPicture"
                    >
                        {this.showPicture()}
                    </div>
                    <i className="right" onClick={(e) => {this.changeSlide("right");
                                                     clearInterval(this.state.timer)
                                                     }}></i>
                </div>
        )
    }

}

export default Slider;
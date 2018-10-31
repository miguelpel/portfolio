import React, { Component } from "react";
import posed from "react-pose";

import "./slider.css";

class Slider extends Component {
    constructor(props){
        super(props);
        // <Slider title={data.title} images={data.images} />
        this.state = {
            imagesUrls: this.props.images,
            images: [],
            index: 0,
            timer: null,
            isVisible: false
        }
    }

    getImages = () => {
        let imgs = [];
        this.state.imagesUrls.map((imageUrl, i) => {
            imgs.push(<img onClick={(e) => {clearInterval(this.state.timer)}} src={imageUrl} alt={`${this.props.title} image ${i}`} />)
        })
        this.setState({
            images: imgs,
            isVisible: true
        })
    }
    
    componentWillMount = () => {
        this.getImages();
    }

    componentDidMount = () => {
        this.setState({
            timer: setInterval(() => (this.changeSlide('right')), 2000)
        })
    }

    changeSlide = (direction) => {
        switch(direction) {
            case "left":
            //
            console.log("left")
            this.setState({
                index: this.state.index === 0
                ? this.state.imagesUrls.length - 1
                : this.state.index - 1
            })
            break;
            case "right":
            //
            console.log("right")
            this.setState({
                index: this.state.index < this.state.imagesUrls.length - 1
                ? this.state.index + 1
                : 0
            })
           
            break;
            default:
            console.log("right")
        }
    }
    
    render() {
        return(
            <div className="sliderContainer">
                <i pose={this.state.isVisible ? 'enter' : 'exit'} className="left" onClick={(e) => {this.changeSlide("left");
                                                    clearInterval(this.state.timer)
                                                    }}></i>
                {this.state.images[this.state.index]}
                <i className="right" onClick={(e) => {this.changeSlide("right");
                                                     clearInterval(this.state.timer)
                                                     }}></i>
            </div>
            
        )
    }

}

export default Slider;
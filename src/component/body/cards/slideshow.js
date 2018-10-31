import React, { Component } from "react";

import "./slideshow.css";

class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      slider: [...props.images],
      activeIndex: 1,
      left: 0
    }
  }
  prevSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + 800 // this.props.sliderWidth not working for some reason
    })
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left: Math.floor(this.state.left - this.props.sliderWidth * (this.state.slider.length - 1))
      })
    }
  }

  nextSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.sliderWidth
    })
    if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0
      })
    }
  }

  clickIndicator = (e) => {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.props.sliderWidth - parseInt(e.target.textContent) * this.props.sliderWidth
    })
  }

  render = () => {
    var style = {
      left: this.state.left,
      width: this.props.sliderWidth,
      height: this.props.sliderHeight
    };
    return (
      <div>
        <div  className="slider-wrapper">
        <div className="slider">
        {this.state.slider.map(function(item,index) {
          return (
            <img key={index} style={style} className={index+1 === this.state.activeIndex ? 'slider-item' : 'hide'} alt={`${this.props.title} image`} src={item} />
          )
        },this)
        }
        </div>
        </div>
        <div className="buttons-wrapper">
        <button className="prev-button" onClick={this.prevSlide}></button>
        <button className="next-button" onClick={this.nextSlide}></button>
        </div>
      </div>
    );
  }
}

export default Slider;

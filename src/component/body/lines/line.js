import React, { Component } from 'react';

import './line.css';

class Line extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nbr: Math.floor(window.innerWidth / 10 / 2),
			colSpans: 0,
			reverse: false
		};
		// console.log(this.state.wd);
	}

	createSpans = () => {
		let spans = [];
		for (let i = 0; i < this.state.nbr; i++) {
			if (i < this.state.colSpans) {
				spans.push(this.state.reverse ? <span className="grey" key={i} /> : <span className="red" key={i} />);
			} else {
				spans.push(this.state.reverse ? <span className="red" key={i} /> : <span className="grey" key={i} />);
			}
		}
		return spans;
	};

	updateDimensions = () => {
		this.setState({ nbr: Math.floor(window.innerWidth / 10 / 2) });
	};

	componentWillMount = () => {
		this.updateDimensions();
	};

	componentDidMount = () => {
		window.addEventListener('resize', this.updateDimensions);
		this.animateDots();
	};

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateDimensions);
	};

	animateDots = () => {
		setInterval(this.addDot, 200);
	};

	addDot = () => {
		if (this.state.colSpans >= this.state.nbr) {
			this.setState({
				colSpans: 0,
				reverse: this.state.reverse ? false : true
			});
		} else {
			this.setState({
				colSpans: this.state.colSpans + 1
			});
		}
	};

	render() {
		return <div className="line">{this.createSpans()}</div>;
	}
}

export default Line;

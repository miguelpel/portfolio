import React, { Component } from 'react';
import posed from 'react-pose';
import Slider from './slider/slider';

import './uniqcard.css';

const Uc = posed.div({
	enter: {
		y: 0,
		opacity: 1,
		transition: { ease: 'easeOut', duration: 600 }
	},
	exit: {
		y: 400,
		opacity: 0,
		transition: { ease: 'easeIn', duration: 100 }
	}
});

class UniqCard extends Component {
	state = {
		show: false
	};

	getLinks = () => {
		const links = [];
		if (this.props.data.link) {
			links.push(
				<div key="link" className="linkContainer">
					<a href={this.props.data.link}>Go to the Website</a>
				</div>
			);
		}
		if (this.props.data.gitLink) {
			links.push(
				<div key="gitlink" className="linkContainer">
					<a href={this.props.data.gitLink}>See Code On Github</a>
				</div>
			);
		}
		return links;
	};

	getPicture = () => {
		if (this.props.data.display === 'slider')
			return <Slider title={this.props.data.title} images={this.props.data.images} />;
		if (this.props.data.display === 'iframe')
			return (
				<div className="iframecontainer">
					<iframe
						title={this.props.data.title}
						src={this.props.data.linkIframe ? this.props.data.linkIframe : this.props.data.link}
						height="400"
						width="800"
					/>
				</div>
			);
	};

	componentDidMount = () => {
		this.setState({
			show: true
		});
	};

	componentWillUnmount = () => {
		this.setState({
			show: false
		});
	};

	render() {
		const { data } = this.props;
		return (
			<div
				className="uniqcardContainer"
				onClick={e => {
					if (e.target !== 'cardBody') this.props.removeUniqCard();
				}}
			>
				<Uc
					className="uniqcard"
					onClick={e => (e.target = 'cardBody')}
					pose={this.state.show ? 'enter' : 'exit'}
				>
					<div className="closeBtnContainer">
						<div className="closeBtn" onClick={e => this.props.removeUniqCard()}>
							x
						</div>
					</div>
					{this.getPicture()}
					<h3>{data.title}</h3>
					<p className="uniqcardp">{data.description}</p>
					{this.getLinks()}
				</Uc>
			</div>
		);
	}
}

export default UniqCard;

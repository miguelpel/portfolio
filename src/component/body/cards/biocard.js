import React, { Component } from 'react';
import posed from 'react-pose';
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

class BioCard extends Component {
	state = {
		show: false
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

	getLinks = () => {
		const links = [];
		let i = 0;
		if (this.props.data.link) {
			links.push(
				<div key={'link' + i++} className="linkContainer">
					<a href={this.props.data.link}>See Art Portfolio</a>
				</div>
			);
		}
		if (this.props.data.gitLink) {
			links.push(
				<div key={'gitlink' + i++} className="linkContainer">
					<a href={this.props.data.gitLink}>meet on Github</a>
				</div>
			);
		}
		return links;
	};

	getPicture = () => {
		//
	};

	getDescriptions = () => {
		const descriptions = this.props.data.descriptions;
		if (descriptions) {
			return descriptions.map((description, i) => {
				return <p key={'desc' + i}>{description}</p>;
			});
		}
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
					<img className="bioImg" alt={`${data.title}`} src={data.image} />
					{this.getPicture()}
					{/* <MyCom sliderWidth="400" sliderHeight="250"/> */}
					<h3>{data.title}</h3>
					{this.getDescriptions()}
					{this.getLinks()}
					<div key="linkOnlineCV" className="linkContainer">
						<a href="https://miguelpel.github.io/resume/" download>
							See C.V. Online
						</a>
					</div>
					<div key="linkCv" className="linkContainer">
						<a href="documents/C_V_Miguel_Pelleterat.pdf">Download C.V. in PDF</a>
					</div>
				</Uc>
			</div>
		);
	}
}

export default BioCard;

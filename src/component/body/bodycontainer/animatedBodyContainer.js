import React, { Component } from 'react';
// import { Transition } from 'react-transition-group';
import posed, { PoseGroup } from 'react-pose';
import shuffle from './shuffle';

import NavBar from '../navbar/navbar';
import Card from '../cards/card';
import UniqCard from '../cards/uniqcard';
import BioCard from '../cards/biocard';

//import { goBackToTopWithEase } from '../../functions/helperFunctions';

import './animatedBodyContainer.css';

const Item = posed.li({
	enter: {
		y: 0,
		opacity: 1,
		transition: ({ delay }) => ({ delay: delay * 100 + 400, ease: 'easeOut', duration: 600 })
	},
	exit: {
		y: 400,
		opacity: 0,
		transition: ({ delay }) => ({ delay: delay * 50, ease: 'easeIn', duration: 400 })
	},
	flip: {
		scale: 1,
		transition: {
			scale: {
				type: 'spring',
				stiffness: 50,
				velocity: 10
			},
			default: {
				type: 'spring',
				stiffness: 50
			}
		}
	}
});

class PageBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			cards: [],
			bio: null,
			filter: null,
			uniqCard: null
		};
	}

	componentDidMount() {
		fetch('./data/data.json')
			.then(response => response.json())
			.then(data => {
				//create cards
				const cards = data.cards.map((item, i) => {
					return <Card delay={i} key={i} data={item} setUniqCard={this.setUniqCard} />;
				});
				const bioCard = <BioCard data={data.bio} removeUniqCard={this.removeUniqCard} />;
				this.setState({
					cards: shuffle(cards),
					bio: bioCard
				});
			})
			.then(
				//display cards
				this.setState({
					isVisible: true
				})
			);
	}

	setUniqCard = cardId => {
		// Function used for the onClick
		let uC = this.state.cards.filter(card => {
			return card.props.data.id === cardId;
		});
		console.log(uC[0].props.data.title);
		let card = <UniqCard data={uC[0].props.data} removeUniqCard={this.removeUniqCard} />;
		this.setState({
			uniqCard: card
		});
	};

	setBioCard = () => {
		console.log('BioCard');
		let card = this.state.bio;
		this.setState({
			uniqCard: card
		});
	};

	removeUniqCard = () => {
		console.log('remove uniq card');
		console.log(this.state.filter);
		this.setState({
			uniqCard: null
		});
	};

	addFilter = filter => {
		if (filter === 'about') {
			this.setBioCard();
			return true;
		}
		if (filter !== this.state.filter) {
			this.setState(
				{
					filter
				},
				this.applyFilter
			);
		}
	};

	applyFilter = () => {
		console.log('apply filter');
		let filteredCards;
		let otherCards;
		if (this.state.filter !== '') {
			filteredCards = this.state.cards.filter(card => {
				return card.props.data.category === this.state.filter;
			});
			otherCards = shuffle(
				this.state.cards.filter(card => {
					return card.props.data.category !== this.state.filter;
				})
			);
		}
		if (this.state.isVisible) {
			this.setState({
				cards: [...filteredCards, ...otherCards]
			});
		}
	};

	getUniqCard = () => {
		return this.state.uniqCard;
	};

	getCards = () => {
		return this.state.cards.map((Card, i) => (
			<Item key={Card.key} delay={i}>
				{Card}
			</Item>
		));
	};

	render = () => {
		const { isVisible, uniqCard } = this.state;
		return (
			<div className="body_container">
				<NavBar addFilter={this.addFilter} />
				<ul className="cardBody">
					<PoseGroup
						onRest={() => {
							console.log('Group complete');
						}}
					>
						{isVisible && this.getCards()}
					</PoseGroup>
				</ul>
				{uniqCard && this.getUniqCard()}
			</div>
		);
	};
}

export default PageBody;

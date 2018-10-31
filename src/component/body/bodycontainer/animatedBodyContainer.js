import React, { Component } from 'react';
// import { Transition } from 'react-transition-group';
import posed, { PoseGroup } from "react-pose";
import shuffle from "./shuffle";

import Card from '../cards/otherCard';
import UniqCard from '../cards/uniqcard';
import BioCard from '../cards/biocard';
import './animatedBodyContainer.css';

const Item = posed.li({
  enter: { y: 0,
    opacity: 1,
    transition: ({ delay }) => ({ delay: (delay * 100) + 400, ease: 'easeOut', duration: 600  })},
  exit: { y: 400,
    opacity: 0,
    transition: ({ delay }) => ({ delay: (delay * 50), ease: 'easeIn', duration: 400  })},
  flip: {
    scale: 1,
    transition: {
      scale: {
        type: "spring",
        stiffness: 50,
        velocity: 10
      },
      default: {
        type: "spring",
        stiffness: 50,
      }
    }
  }
});

class PageBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,    
            items: [],
            filter: this.props.filter,
            uniqCard: null
        };
    }

    componentDidMount() {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                //create cards
                let cards = data.cards.map((item, i) => {
                    return  (<Card
                                delay={i}
                                key={i}
                                data={item}
                                setUniqCard={this.setUniqCard}
                            />)
                });
                this.setState({
                    items: shuffle(cards)
                })
            })
            .then(
                //display cards
                this.setState({
                    isVisible: true
                })
            )
    }

    setUniqCard = (cardId) => {
        // Function used for the onClick
        let uC = this.state.items.filter(card => {
            return card.props.data.id === cardId
        })
        console.log(uC[0].props.data.title)
        let card = <UniqCard
                    data={uC[0].props.data}
                    removeUniqCard={this.removeUniqCard} />
        this.setState({
            uniqCard: card
        });
    }

    removeUniqCard = () => {
        this.setState({
            uniqCard: null
        });
    }

    setFilter = () => {
        console.log("set filter")
        if(this.props.filter !== "" && this.props.filter !== this.state.filter) {
            this.setState({
                filter: this.props.filter
            }, this.applyFilter);
        }
    }

    applyFilter = () => {
        console.log("apply filter")
        let filteredCards;
        let otherCards
        if(this.state.filter !== "") {
            filteredCards = this.state.items.filter( card => {
                return card.props.data.category === this.state.filter
            })
            otherCards = shuffle(
                this.state.items.filter( card => {
                    return card.props.data.category !== this.state.filter
                })
            )
        }
        if(this.state.isVisible) {
            this.setState({
                items: [...filteredCards, ...otherCards]
            });
        }
    }

    hide = () => {
        this.setState({
            isVisible: false
        });
    }

    show = () => {
        this.setState({
            isVisible: true
        });
    }

    // Useful, or 
    // componentWillUnmount = () => {
    //     this.hide()
    // }

    getItems = () => {
        this.setFilter();
        return this.state.uniqCard
        ? <Item key="UniqCard">{this.state.uniqCard}</Item>
        : this.state.items.map((Card, i) => <Item
        key={Card.key} delay={i}
        >{Card}</Item>)
    }

    render = () => {
        const { isVisible, items } = this.state;
        console.log("Body rendering")
        // this.setFilter();
            return(
                <div>
                <ul className="cardBody">
                   <PoseGroup
                        onRest={()=>{console.log("Group complete")}}
                   >{
                       isVisible && this.getItems()
                   }
                    </PoseGroup>
                </ul>
                </div>
            )
    }
}

export default PageBody;

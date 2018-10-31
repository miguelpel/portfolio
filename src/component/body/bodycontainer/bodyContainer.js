import React, { Component } from 'react';
//import ReactDelayRender from 'react-delay-render';

import Card from '../cards/card';
import UniqCard from '../cards/uniqcard';
import './bodyContainer.css';

class PageBody extends Component {
    constructor(props){
        super(props)

        this.state = {
            visible: false,
            data: [],
            cards: [],
            uniqCardId: -1
        }
    }

    displayCards = () => {
        console.log("display cards")
        this.setState({
            visible: true
        })
    }

    discardCards = () => {
        this.setState({
            visible: false
        })
    }

    getData = () => {
            fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ data }, this.createCards);
            })
    }

    createCards = () => {
        console.log("creating cards")
        let cards = this.state.data.map((item, i) => {
                    return  (<Card
                                visible={this.state.visible}
                                delay={i}
                                key={i}
                                data={item}
                                setUniqCard={this.createUniqCard}
                            />)
                });
        this.setState({
            cards: cards
        }, this.displayCards)
    }

    setUniqCard = (cardId) => {
        // Function used for the onClick
        this.setState({
            uniqCardId: cardId
        });
    }

    removeUniqCard = () => {
        this.setState({
            uniqCardId: -1
        });
    }

    componentDidMount = () => {
        this.getData();
    }

    getUniqCard = () => {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                data = data.filter(item => item.id === this.props.uniqCardId);
                //const result = words.filter(word => word.length > 6);
                this.setState({ data });
            });
        // make a call
        // render the card
    }

    componentWillUpdate = () => {
        console.log("comp will update")
    }

    // And SHUFFLE the array!!!

    displayBody = () => {
        //let card;
        // consitionnal rendering:
        if (this.state.uniqCardId >= 0) {
            let cardData = this.state.data.filter(item => item.id === this.state.uniqCardId);
            return <UniqCard delay="200" data={cardData} removeUniqCard={this.removeUniqCard}/>;
        } else {
            let cards = []
            if(this.props.filter !== "") {
                cards = this.state.data.filter(item => item.category === this.props.filter)
                .map((item, i) => {
                    //console.log(i)
                    return <Card key={i} delay={i} data={item} setUniqCard={this.setUniqCard} />
                });
            } else {
                cards = this.state.data.map((item, i) => {
                    //console.log(i)
                    return <Card key={i} delay={i} data={item} setUniqCard={this.setUniqCard} />
                });
            }
            return cards;
        }
    }

    render = () => {
        console.log("Body render")
        console.log(this.state.data)
        console.log(this.state.cards.length)
            return(
                <div className="body">
                    {this.displayBody()}
                </div>
            )
    }
}

//export default ReactDelayRender({ delay: 50 })(PageBody);
export default PageBody;
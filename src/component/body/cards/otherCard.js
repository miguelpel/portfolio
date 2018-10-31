import React, { Component} from 'react';
import posed from 'react-pose';

import './card.css';

const Card = (props) => {
        const { data } = props;
        return(
            <div
                className="card"
                onClick={(e) => props.setUniqCard(data.id, e)}
            >
                <img alt={`${data.title} image`} src={data.images[0]} />
                <h3>{data.title}</h3>
                <p>{data.tag}</p>
            </div>
    )
}

export default Card;
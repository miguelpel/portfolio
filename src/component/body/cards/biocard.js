import React from 'react';

import './uniqcard.css'

const BioCard = (props) => {
    const { data } = props
    const getLinks = () => {
        const links = [];
        if (data.link) {
            links.push(
                <div key="link" className="linkContainer">
                    <a href={data.link}>See Art Portfolio</a>
                </div>
            )
        }
        if (data.gitLink) {
            links.push(
                <div key="gitlink" className="linkContainer">
                    <a href={data.gitLink}>meet on Github</a>
                </div>
            )
        }
        return links;
    }

    const getPicture = () => {
        //  
    }

    const getDescriptions = () => {
        const descriptions = props.data.descriptions;
        const ps = [];
        if (descriptions) {
            descriptions.map(description => {
                ps.push(<p>{description}</p>)
            })
        }
        return ps;
    }

    return(
        <div
            className="uniqcard"
        >
            <div className="closeBtnContainer">
                <div className="closeBtn" onClick={(e) => props.removeUniqCard()}>x</div>
            </div>
            <img className="bioImg" alt={`${data.title} image`} src={data.image} />
            {getPicture()}
            {/* <MyCom sliderWidth="400" sliderHeight="250"/> */}
            <h3>{data.title}</h3>
            {getDescriptions()}
            {getLinks()}
            <div key="link" className="linkContainer">
                    <a href="#">See C.V. Online</a>
            </div>
            <div key="link" className="linkContainer">
                    <a href="#">Download C.V.</a>
            </div>
        </div>
    )
}

export default BioCard;
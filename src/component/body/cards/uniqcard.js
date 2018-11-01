import React from 'react';

import Slider from './slider';

import './uniqcard.css'

const UniqCard = (props) => {
    const { data } = props
    const getLinks = () => {
        const links = [];
        if (data.link) {
            links.push(
                <div key="link" className="linkContainer">
                    <a href={data.link}>See Website</a>
                </div>
            )
        }
        if (data.gitLink) {
            links.push(
                <div key="gitlink" className="linkContainer">
                    <a href={data.gitLink}>See Code On Github</a>
                </div>
            )
        }
        return links;
    }

    const getPicture = () => {
        if(data.display === "slider") return <Slider title={data.title} images={data.images} />
        if(data.display === "iframe") return (
            <div className="iframecontainer">
                <iframe src={data.linkIframe ? data.linkIframe : data.link} height="400" width="800"></iframe>
            </div>
        )
            
    }

    return(
        <div
            className="uniqcard"
        >
            <div className="closeBtnContainer">
                <div className="closeBtn" onClick={(e) => props.removeUniqCard()}>x</div>
            </div>
            {/* <img alt={`${data.title} image`} src={data.images[0]} /> */}
            {getPicture()}
            {/* <MyCom sliderWidth="400" sliderHeight="250"/> */}
            <h3>{data.title}</h3>
            {/* <p>{data.tag}</p> */}
            <p>{data.shortDescription}</p>
            <p className="description">{data.description}</p>
            {getLinks()}
        </div>
    )
}

export default UniqCard;
import React from 'react';
import './AurateInfoItem.css';


const AurateInfoItem = (props) => {
    return (
        <a className="aurate__info-item" href={props.url} target="_blank" rel="noopener noreferrer">
            <img src={props.img} alt="img"/>
            <div className="aurate__info-text">{props.title}</div>
        </a>
    )
}

export default AurateInfoItem;
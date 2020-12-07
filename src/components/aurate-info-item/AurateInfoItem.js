import React from 'react';
import './AurateInfoItem.css';


const AurateInfoItem = (props) => {
    return (
        <div className="aurate__info-item">
            <img src={props.img} alt="img"/>
            <div className="aurate__info-text">{props.title}</div>
        </div>
    )
}

export default AurateInfoItem;
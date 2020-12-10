import React from 'react';
import './AurateItem.css'

const AurateItem = (props) => {
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="aurate__item">
            <div className="aurate__item-img">
                <img className="img" src={props.img} alt=""/>
            </div>
            <div className="aurate__title">{props.title}</div>
        </a>
    )
}

export default AurateItem;
import React from 'react';
import './AurateItem.css'

const AurateItem = (props) => {
    return(
        <div className="aurate__item">
            <div className="aurate__item-img">
                <img className="img" src={props.img} alt=""/>
            </div>
            <div className="aurate__title">{props.title}</div>
        </div>
    )
}

export default AurateItem;
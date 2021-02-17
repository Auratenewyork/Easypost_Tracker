import React from 'react';
import './ArrivalItem.css';


const ArrivalItem = ({ onClick, ...item }) => {
    const handleClick = () => {
        onClick(item)
    }
    return (
        <div class="arrival-item" onClick={handleClick}>
            <img class="arrival-item__image" src={item.image} alt={item.name} />
            <span>{item.name}</span>
        </div>
    )
};

export default ArrivalItem;
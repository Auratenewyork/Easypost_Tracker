import React from 'react';
import './ArrivalItem.css';


const ArrivalItem = ({ onClick, ...item }) => {
    const handleClick = () => {
        onClick(item)
    }

    return (
        <div className="arrival-item-wrapper" onClick={handleClick}>
            {item.products.map(product => (

                <div className="arrival-item">
                    <img className="arrival-item__image" src={product.image} alt={product.name} />
                    <div className="arrival-item__info">
                        <span style={{ marginBottom: 10 }}>{product.name}</span>
                        <span>Quantity: {product.quantity}</span>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ArrivalItem;
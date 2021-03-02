import React from "react";
import "./ArrivalItem.css";

const ArrivalItem = ({ onClick, ...item }) => {
    const handleClick = () => {
        onClick(item);
    };

    return (
        <div className="arrival-item-wrapper" onClick={handleClick}>
            {item.products.map((product) => (
                <div key={product.name} className="arrival-item">
                    <img
                        className="arrival-item__image"
                        src={product.image}
                        alt={product.name}
                    />
                    <div className="arrival-item__info">
                        <span style={{ marginBottom: 10 }}>{product.name}</span>
                        <span style={{ marginBottom: 5 }}>
                            Quantity: {product.quantity}
                        </span>
                        <span style={{ marginBottom: 5 }}>{product.title}</span>
                        {product.metadata.map((data) => (
                            <span
                                style={{
                                    fontSize: "0.875rem",
                                    marginBotton: 5,
                                }}
                                key={data}
                            >
                                {data}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArrivalItem;

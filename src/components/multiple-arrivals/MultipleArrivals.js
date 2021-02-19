import React, { useState } from 'react';
import Arrival from '../arrival/Arrival';
import ArrivalItem from './ArrivalItem';
import AurateItems from "../aurate-items/AurateItems";


const MultipleArrivals = ({ trackingData }) => {
    const [selectedArrival, setSelectedArrival] = useState(null);

    const handleClick = (item) => {
        setSelectedArrival(item);
    }

    const handleGoBack = () => setSelectedArrival(null);

    if (selectedArrival) {
        return <Arrival trackingData={selectedArrival} goBack={handleGoBack} multiple />
    }

    return (
        <main className="main">
            <div className="arrival__block y-scroll">
                <div className="arrival__path">ON ITS WAY</div>
                <div className="arrival-items-text">Your items</div>
                <div className="arrival__block-items">
                    {trackingData.map((item, index) => <ArrivalItem key={index} {...item} onClick={handleClick} />)}
                </div>
                <div className="help-text">*click the item to track it's progress</div>
            </div>

            <AurateItems />
        </main>
    )
}

export default MultipleArrivals
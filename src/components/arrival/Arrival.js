import React from 'react';
import './Arrival.css'
import ArrivalDate from "../arrival-date/ArrivalDate";
import AurateItems from "../aurate-items/AurateItems";

const Arrivals = ()=> {
    return (
        <main className="main">
            <ArrivalDate />
            <AurateItems/>
        </main>

    )
}

export default Arrivals;
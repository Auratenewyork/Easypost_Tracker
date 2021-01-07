import React from 'react';
import './AurateItems.css'
import AurateItem from "../aurate-item/AurateItem";
import item1 from '../../assets/img/img1.jpg';
import item2 from '../../assets/img/img2.jpg';


const AurateItems = () => {
    return (
        <div className="aurate__items">
            <AurateItem title="NEW IN" img={item1} url="https://auratenewyork.com/collections/new" />
            <AurateItem title="TRENDING NOW" img={item2} url="https://auratenewyork.com/collections/bestsellers" />
        </div>
    )
}

export default AurateItems;
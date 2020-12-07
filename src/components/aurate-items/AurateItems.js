import React from 'react';
import './AurateItems.css'
import AurateItem from "../aurate-item/AurateItem";
import item1 from '../../assets/img/img1.jpg';
import item2 from '../../assets/img/img2.jpg';


const AurateItems = () => {
    return(
        <div className="aurate__items">
            <AurateItem title="NEW COLLECTION" img={item1}/>
            <AurateItem title="HOME TRY ONES" img={item2}/>
        </div>
    )
}

export default AurateItems;
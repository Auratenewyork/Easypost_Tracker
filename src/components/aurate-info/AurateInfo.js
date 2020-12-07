import React from 'react';
import './AurateInfo.css'
import AurateInfoItem from "../aurate-info-item/AurateInfoItem";
import img1 from '../../assets/img/item1.jpg';
import img2 from '../../assets/img/item2.jpg';
import img3 from '../../assets/img/item3.jpg';
import img4 from '../../assets/img/item4.jpg';
import img5 from '../../assets/img/item5.jpg';

const AurateInfo = () => {
    return (
        <div className="aurate__info">
            <div className="container">
                <h2 className="aurate__info-title">WHAT'S HAPPENING AT AURATE</h2>
                <div className="aurate__info-items">
                    <div className="aurate__items-item">
                        <AurateInfoItem img={img1} title="Diversity at Aurate"/>
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img2} title="No more silence: A latter from our founders"/>
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img3} title="Going Deep on Adulting with Sophie"/>
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img4} title="Going Deep on Identity with Bouchra"/>
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img5} title="Band of Mothers: Alexa von Tobel"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AurateInfo;
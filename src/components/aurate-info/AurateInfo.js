import React from 'react';
import './AurateInfo.css'
import AurateInfoItem from "../aurate-info-item/AurateInfoItem";
import img1 from '../../assets/img/item5.jpg';
import img2 from '../../assets/img/item1.jpg';
import img3 from '../../assets/img/item2.jpg';
import img4 from '../../assets/img/item3.jpg';
import img5 from '../../assets/img/item4.jpg';

const AurateInfo = () => {
    return (
        <div className="aurate__info">
            <div className="container">
                <h2 className="aurate__info-title">IN THE KNAU</h2>
                <div className="aurate__info-items">
                    <div className="aurate__items-item">
                        <AurateInfoItem img={img1} title="Aurate x She Should Run" url="https://auratenewyork.com/blogs/blog/aurate-x-she-should-run" />
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img2} title="Diversity At Aurate" url="https://auratenewyork.com/blogs/blog/diversity-deep-dive" />
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img3} title="No more silence: A letter from our founders" url="https://auratenewyork.com/blogs/blog/no-more-silence-a-letter-from-our-founders" />
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img4} title="Going Deep on Adulting with Sophie" url="https://auratenewyork.com/blogs/blog/going-deep-on-adulting-with-sophie" />
                    </div>

                    <div className="aurate__items-item">
                        <AurateInfoItem img={img5} title="Going Deep on Identity with Bouchra" url="https://auratenewyork.com/blogs/blog/going-deep-on-identity-with-bouchra" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AurateInfo;
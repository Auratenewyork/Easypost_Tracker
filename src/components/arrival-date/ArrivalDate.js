import React from 'react';
import './ArrivalDate.css'

const ArrivalDate = () => {
    return(
        <div className="arrival__block">
            <span className="arrival__title"> ESTIMATED ARRIVAL DATE</span>
            <div className="arrival__date">
                <div className="arrival__day-name">Thursday</div>
                <div className="arrival__month">August</div>
                <div className="arrival__day">20</div>

            </div>
            <div className="arrival__path">ON ITS WAY</div>
            <div className="way__info">

                <div className="way__info-item first-item">
                    <div className="info__title">20/09/20</div>
                    <div className="info__text">8:42 am</div>

                </div>
                <div className="way__info-item second-item">
                    <div className="info__title">Departure Scan</div>
                    <div className="info__text">New York, New York</div>
                </div>
            </div>

            <div className="tracking__number">
                <div className="tracking__number-text">Tracking</div>
                <div className="tracking__number-text">1f3462342883920</div>
            </div>


            <div className="tracking__button">
                <button className="tracking__btn">SHOW PREVIOUS TRACKING ACTIVITY</button>
            </div>

        </div>
    )
}

export default ArrivalDate;
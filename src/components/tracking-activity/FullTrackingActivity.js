import React from 'react';
import './FullTrackingActivity.css'
import moment from 'moment'

const FullTrackingActivity = ({ activity }) => {
    return (
        <div>
            <div className="way__info__wrapper">
                {activity.map((item, index) => (
                    <div className="way__info" key={index}>
                        <div className="way__info-item first-item">
                        <div className="info__title">{moment(item.date).format('DD/MM/YYYY')}</div>
                        <div className="info__text">8:42 am</div>
                        </div>
                        <div className="way__info-item second-item">
                            <div className="info__title">{item.message}</div>
                            <div className="info__text">{item.city}, {item.state}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FullTrackingActivity;
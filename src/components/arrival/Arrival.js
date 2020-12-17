import React, { useState } from 'react';
import './Arrival.css'
import AurateItems from "../aurate-items/AurateItems";
import { LastTrackingActivity, FullTrackingActivity } from '../tracking-activity'

const LAST_ACTIVITY_NUMBER = 2

const Arrivals = ({ trackingData }) => {
    const [showFullActivity, setShowFullActivity] = useState(false)

    const showPreviousActivity = () => setShowFullActivity(true)
    const hidePreviousActivity = () => setShowFullActivity(false)

    const activity = trackingData.items
    const lastActivity = activity.slice(0, 2)

    return (
        <main className="main">
            <div className="arrival__block">
                <span className="arrival__title">ESTIMATED ARRIVAL DATE</span>
                <div className="arrival__date">
                    <div className="arrival__day-name">{trackingData.estimated_date.weekday}</div>
                    <div className="arrival__month">{trackingData.estimated_date.month}</div>
                    <div className="arrival__day">{trackingData.estimated_date.day}</div>

                </div>
            <div className="arrival__path">ON ITS WAY</div>
                {activity.length > LAST_ACTIVITY_NUMBER
                    ? showFullActivity
                        ? <FullTrackingActivity activity={activity} />
                        : <LastTrackingActivity activity={lastActivity} />
                    : <LastTrackingActivity activity={lastActivity} />
                }
                {activity.length > LAST_ACTIVITY_NUMBER &&
                    <div className="tracking__button">
                        {showFullActivity
                            ? <button className="tracking__btn" onClick={hidePreviousActivity}>BACK</button>
                            : <button className="tracking__btn" onClick={showPreviousActivity}>SHOW PREVIOUS TRACKING ACTIVITY</button>
                        }
                    </div>
                }
            </div>

            <AurateItems />
        </main>

    )
}

export default Arrivals;
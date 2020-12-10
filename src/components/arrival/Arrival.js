import React, { useState } from 'react';
import './Arrival.css'
import AurateItems from "../aurate-items/AurateItems";
import { LastTrackingActivity, FullTrackingActivity } from '../tracking-activity'

const LAST_ACTIVITY_NUMBER = 2

const Arrivals = ({ trackingData }) => {
    const [showFullActivity, setShowFullActivity] = useState(false)

    const showPreviousActivity = () => setShowFullActivity(true)
    const hidePreviousActivity = () => setShowFullActivity(false)

    const lastActivity = trackingData.slice(0, 2)

    return (
        <main className="main">
            <div className="arrival__block">
                <span className="arrival__title">ESTIMATED ARRIVAL DATE</span>
                <div className="arrival__date">
                    <div className="arrival__day-name">Thursday</div>
                    <div className="arrival__month">August</div>
                    <div className="arrival__day">20</div>

                </div>
            <div className="arrival__path">ON ITS WAY</div>
                {trackingData.length > LAST_ACTIVITY_NUMBER
                    ? showFullActivity
                        ? <FullTrackingActivity activity={trackingData} />
                        : <LastTrackingActivity activity={lastActivity} />
                    : <LastTrackingActivity activity={lastActivity} />
                }
                {trackingData.length > LAST_ACTIVITY_NUMBER &&
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
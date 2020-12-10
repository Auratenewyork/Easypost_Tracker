import React from 'react'
import './LastTrackingActivity.css'
import moment from 'moment'


const LastTrackingActivity = ({ activity }) => {
  return (
    <div className="tracking-activity">
      {activity.map((item, index) => {
        const hasNext = (index + 1) < activity.length

        return (
          <div className="tracking-activity__item" key={index}>
            <div className="tracking-activity__item__column">
              <div className="info__title">{moment(item.date).format('DD/MM/YYYY')}</div>
              <div className="info__text">12:00 am</div></div>
            <div className="tracking-activity__item__column timeline">
              {/* <div className={`timeline__circle ${item.done ? 'active' : ''}`}> */}
              <div className="timeline__circle active">
                <div className="timeline__circle__inside" />
              </div>
              {hasNext &&
                // <div className={`timeline__line ${item.done ? 'active' : ''}`} />
                <div className="timeline__line active" />
              }
            </div>
            <div className="info-item__column status-message">
              <div className="title">{item.message}</div>
            </div>
          </div>
      )})}
    </div>
  )
}

export default LastTrackingActivity
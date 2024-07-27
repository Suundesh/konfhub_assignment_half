import React from 'react';
import useFetchData from '../hooks/useFetchData';
import useCountdown from '../hooks/useCountdown';
import '../style/Event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMoneyBillWave, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const Event = () => {
    const { data, loading, error } = useFetchData();
    const targetDate = '2024-07-31T00:00:00Z';
    const countdown = useCountdown(targetDate);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    const navigateToEventWebsite = () => {
        window.location.href = data.event_website;
    };

    return (
        <div>
            <div className="info-box">
                <h1 className='event-details-title'>KonfHub Frontend Evaluation Task</h1>
                <div className="event-icons">
                    <div className="event-icon">
                        <FontAwesomeIcon icon={faVideo} /> Online
                    </div>
                    <div className="event-icon">
                        <FontAwesomeIcon icon={faMoneyBillWave} /> Paid
                    </div>
                </div>
                <div className="event-details">
                    <p>
                        <span className='event-subhead' >Event Live Link:</span>  <a href={data.event_website} target="_blank" >Open streaming website</a>
                    </p>
                    <p>
                        <span className='event-subhead'>Date: </span>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST
                    </p>
                    <p>
                        EVENT STARTS IN <br></br>
                        <span className="event-countdown">
                            {countdown}
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <button className="info-box-buy-btn">Buy Now</button>
            </div>
            <div>
                <button className="info-box-btn"
                    onClick={navigateToEventWebsite}
                >Official Website <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </div>
        </div>
    );
};

export default Event;

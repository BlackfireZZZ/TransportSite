import React from "react";
import "../Timeline.css";

const Timeline = ({ events }) => {
    return (
        <div className="timeline-container">
            <div className="timeline-line">
                {events.map((event, index) => (
                    <div key={index} className="timeline-item" style={{ left: `${10 + (80 / (events.length - 1)) * index}%` }}>
                        <div className="timeline-dot"></div>
                        <div className={`timeline-label ${index % 2 === 0 ? "above" : "below"}`}>
                            <strong>{event.year}</strong>: {event.title}
                            <div className="timeline-tooltip">{event.details}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="timeline-arrow"></div>
        </div>
    );
};

export default Timeline;

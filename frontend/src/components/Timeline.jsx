import React from "react";
import "../Timeline.css";

const Timeline = ({ events }) => {
    const leftOffset = 10; // Увеличенный отступ от края линии
    const itemSpacing = (100 - 2 * leftOffset) / (events.length - 1); // Учитываем симметрию

    return (
        <div className="timeline-wrapper">
            <h1 className="timeline-title">Timeline</h1>
            <div className="timeline-container">
                <div className="timeline-line">
                    {/* Белая точка в начале */}
                    <div className="timeline-start-dot"></div>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            style={{left: `${leftOffset + itemSpacing * index}%`}}
                        >
                            <div className="timeline-dot"></div>
                            <div
                                className={`timeline-label ${
                                    index % 2 === 0 ? "above" : "below"
                                }`}
                            >
                                <strong>{event.year}</strong>: {event.title}
                                <div className="timeline-tooltip">{event.details}</div>
                            </div>
                        </div>
                    ))}
                    <div className="timeline-arrow"></div>
                </div>

            </div>
        </div>
    );
};

export default Timeline;

import React, { useState } from "react";
import "../Timeline.css";

const Timeline = ({ events }) => {
    const [tooltip, setTooltip] = useState({
        visible: false,
        content: "",
        x: 0,
        y: 0,
    });

    const handleMouseEnter = (e, details) => {
        const rect = e.target.getBoundingClientRect();
        setTooltip({
            visible: true,
            content: details,
            x: rect.left,
            y: rect.top - 130, // Чуть выше точки
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, content: "", x: 0, y: 0 });
    };

    const leftOffset = 10;
    const itemSpacing = (100 - 2 * leftOffset) / (events.length - 1);

    return (
        <div className="timeline-wrapper">
            <h1 className="timeline-title">Timeline</h1>
            <div className="timeline-container">
                <div className="timeline-line">
                    <div className="timeline-start-dot"></div>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            style={{ left: `${leftOffset + itemSpacing * index}%` }}
                        >
                            <div className="timeline-dot"></div>
                            <div
                                className={`timeline-label ${
                                    index % 2 === 0 ? "above" : "below"
                                }`}
                                onMouseEnter={(e) => handleMouseEnter(e, event.details)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <strong>{event.year}</strong>: {event.title}
                            </div>
                        </div>
                    ))}
                    <div className="timeline-arrow"></div>
                </div>
            </div>
            {tooltip.visible && (
                <div
                    className="timeline-tooltip"
                    style={{
                        left: `${tooltip.x}px`,
                        top: `${tooltip.y}px`,
                        position: "fixed",
                        visibility: tooltip.visible ? "visible" : "hidden",
                        opacity: tooltip.visible ? 1 : 0,
                    }}
                >
                    {tooltip.content}
                </div>
            )}
        </div>
    );
};

export default Timeline;

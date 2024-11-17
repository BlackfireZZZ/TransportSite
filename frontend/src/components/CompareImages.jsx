import React, { useState } from "react";
import "../CompareImages.css";

const CompareImages = ({ beforeImage, afterImage, width = 600, height = 400 }) => {
    const [dividerPosition, setDividerPosition] = useState(50);

    const handleMouseDown = (event) => {
        const container = event.currentTarget.parentNode;
        const onMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const newDividerPosition = ((e.clientX - rect.left) / rect.width) * 100;
            setDividerPosition(Math.max(0, Math.min(newDividerPosition, 100)));
        };

        const onMouseUp = () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    return (
        <div
            className="compare-container"
            style={{ "--divider-position": `${dividerPosition}%`, width, height }}
        >
            <div className="image-wrapper">
                <img src={afterImage} alt="After" className="image" />
                <div className="before-image">
                    <img src={beforeImage} alt="Before" className="image fixed" />
                </div>
            </div>
            <div
                className="divider"
                onMouseDown={handleMouseDown}
            />
        </div>
    );
};

export default CompareImages;

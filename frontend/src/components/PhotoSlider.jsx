import React, { useState } from 'react';
import '../PhotoSlider.css';

const PhotoSlider = ({ photos, width = 400, height = 300 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState(''); // 'left' или 'right'

    const nextPhoto = () => {
        if (isAnimating) return;
        setAnimationDirection('right');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
            setIsAnimating(false);
        }, 100); // Длительность анимации
    };

    const prevPhoto = () => {
        if (isAnimating) return;
        setAnimationDirection('left');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? photos.length - 1 : prevIndex - 1
            );
            setIsAnimating(false);
        }, 100); // Длительность анимации
    };

    return (
        <div className="slider" style={{ width, height }}>
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`slide ${
                        index === currentIndex
                            ? animationDirection === 'right'
                                ? 'slide-in-right'
                                : 'slide-in-left'
                            : animationDirection === 'right'
                                ? 'slide-out-left'
                                : 'slide-out-right'
                    }`}
                    style={{ backgroundImage: `url(${require(`../assets/${photo}`)})` }}
                />
            ))}
            <button className="photo-slider__arrow photo-slider__arrow--left" onClick={prevPhoto}>
                &lt;
            </button>
            <button className="photo-slider__arrow photo-slider__arrow--right" onClick={nextPhoto}>
                &gt;
            </button>
        </div>
    );
};

export default PhotoSlider;

import React from 'react';
import '../FullWidthContainer.css';
import '../Card1.css';
import '../Card2.css';
import '../Card4.css'
import PhotoSlider from "./PhotoSlider";

const Card6 = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <div className="card2">
                    <div className="card2-content">
                        <div className="card1-body">
                            <div className="card2-body-right"> {/* Перенесено справа */}
                                <PhotoSlider
                                    photos={['service1.jpg', 'service2.jpg', 'service3.jpg']}
                                    height="100%"
                                />
                            </div>
                            <div className="card2-body-left"> {/* Теперь находится слева */}
                                <div className="card4-header-container">
                                    <div className="card4-header">Service</div>
                                </div>
                                <ul className="card2-list">
                                    <li className="elementor-icon-list-item">
                                        Maintenance and repair
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Spare parts supply
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Malfunction diagnostics
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card6;

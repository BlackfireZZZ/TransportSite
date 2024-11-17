// Card1.js
import React from 'react';
import '../Card1.css';
import PhotoSlider from "./PhotoSlider";
import DownloadLink from "./DownloadLink";

const Card8 = () => {
    return (
        <div className="card1">
            <div className="card3-content">
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container">
                            <div className="card1-header">Long-term vehicle rental </div>
                        </div>
                        <ul className="card1-list" style={{width: '350px'}}>
                            <li className="elementor-icon-list-item">
                                Keep your operations running smoothly
                            </li>
                            <li className="elementor-icon-list-item">
                                Try before you buy – no commitment
                            </li>
                            <li className="elementor-icon-list-item">
                                Flexible rentals tailored to your needs
                            </li>
                        </ul>
                    </div>
                    <div className="card1-body-right">
                        <div className="slider" style={{width: '400px', height: 'auto'}}>
                            <img src={require('../assets/6.jpg')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card8;

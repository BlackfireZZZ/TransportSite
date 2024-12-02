// Card1.js
import React from 'react';
import '../Card3.css';
import '../Card1.css';
import PhotoSlider from "./PhotoSlider";
import DownloadLink from "./DownloadLink";

const Card1 = () => {
    return (
        <div className="card3">
            <div className="card3-content">
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container">
                            <div className="card1-header">Capital Repair of Specialized Equipment </div>
                        </div>
                        <ul className="card1-list" style={{width: '500px', padding: '20px 20px 0px 20px'}}>
                            <li className="elementor-icon-list-item">
                                Comprehensive overhaul of engines, hydraulics, transmissions, and other key systems.
                            </li>
                            <li className="elementor-icon-list-item">
                                Use of certified spare parts to ensure long-lasting performance.
                            </li>
                            <li className="elementor-icon-list-item">
                                Tailored repair plans to meet exactly your needs.
                            </li>
                            <li className="elementor-icon-list-item">
                                Expertise in repairing:
                            </li>
                        </ul>

                    </div>
                    <div className="card1-body-right">
                        <div className="slider" style={{ height: '500px', width: '650px'}}>
                            <img src={require('../assets/1.jpg')} style={{ width: 'auto', height: '500px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card1;

// Card1.js
import React from 'react';
import '../Card1.css';
import PhotoSlider from "./PhotoSlider";
import DownloadLink from "./DownloadLink";

const Card3 = () => {
    return (
        <div className="card1" style={{height: '500px'}}>
            <div className="card3-content">
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container">
                            <div className="card1-header">Supply of Essential Spare Parts and Components </div>
                        </div>
                        <ul className="card1-list" style={{width: '550px'}}>
                            <li className="elementor-icon-list-item">
                                Genuine spare parts for all major brands, including Caterpillar, Komatsu, Volvo, and
                                Liebherr.
                            </li>
                            <li className="elementor-icon-list-item">
                                Hydraulic systems, engine components, transmissions, and undercarriage parts.
                            </li>
                            <li className="elementor-icon-list-item">
                                Global sourcing&delivery of hard-to-find components.
                            </li>
                            <li className="elementor-icon-list-item">
                                Custom solutions for retrofitting and upgrading equipment.
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

export default Card3;

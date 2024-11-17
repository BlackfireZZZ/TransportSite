import React from 'react';
import '../FullWidthContainer.css';
import '../Card1.css';
import '../Card2.css';
import '../Card4.css';
import PhotoSlider from './PhotoSlider';
import CompareImages from './CompareImages';
import BeforePhoto from '../assets/stalo.jpg';
import AfterPhoto from '../assets/bilo.jpg';

const Card6 = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <div className="card2">
                    <div className="card2-content">
                        {/* Основной контент */}
                        <div className="card1-body">
                            <CompareImages
                                    beforeImage={BeforePhoto}
                                    afterImage={AfterPhoto}
                                    width="60%"
                                    height="300px"
                            />
                            <div className="card2-body-left" style={{flex: '1'}}>
                                <div className="card4-header-container" style={{ width: '55%'}}>
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

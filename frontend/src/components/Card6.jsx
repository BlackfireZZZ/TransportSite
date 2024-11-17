import React from 'react';
import '../FullWidthContainer.css';
import '../Card1.css';
import '../Card2.css';
import '../Card4.css';
import PhotoSlider from './PhotoSlider';
import CompareImages from './CompareImages';
import BeforePhoto from '../assets/logistics1.jpg';
import AfterPhoto from '../assets/logistics2.jpg';

const Card6 = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <div className="card2">
                    <div className="card2-content">
                        {/* Основной контент */}
                        <div className="card1-body">
                            <div className="slider" style={{width: '400px', height: '350px'}}>
                                <img src={require('../assets/logistics2.jpg')}/>
                            </div>
                            <div className="card2-body-left">
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
                        {/* Новый контент снизу */}
                        {/*<div className="card6-bottom-content">*/}
                        {/*    <p className="card6-description">*/}
                        {/*        The photo comparison below showcases the improvements in logistics infrastructure after implementing modern solutions.*/}
                        {/*    </p>*/}
                        {/*    <CompareImages*/}
                        {/*        beforeImage={BeforePhoto}*/}
                        {/*        afterImage={AfterPhoto}*/}
                        {/*        width="60%"*/}
                        {/*        height="300px"*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card6;

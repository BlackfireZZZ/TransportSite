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
                                <div className="slider" style={{width: '500px', height: '350px'}}>
                                    <img src={require('../assets/3.jpg')} style={{ width: 'auto', height: '350px'}}/>
                                </div>
                            </div>
                            <div className="card2-body-left"> {/* Теперь находится слева */}
                                <div className="card4-header-container" style={{width: '60%'}}>
                                    <div className="card4-header">Logistics</div>
                                </div>
                                <ul className="card2-list">
                                    <li className="elementor-icon-list-item">
                                        International transportation
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Customs clearance
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Cargo storage
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

import React from 'react';
import '../FullWidthContainer.css';
import '../Card1.css';
import '../Card2.css';
import '../Card4.css'
import PhotoSlider from "./PhotoSlider";

const Card2 = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <div className="card2">
                    <div className="card2-content">
                        <div className="card1-body">
                            <div className="card2-body-right"> {/* Перенесено справа */}
                                <div className="slider" style={{width: '400px', height: 'auto'}}>
                                    <img src={require('../assets/2.jpg')}/>
                                </div>
                            </div>
                            <div className="card2-body-left"> {/* Теперь находится слева */}
                                <div className="card4-header-container" style={{width: '70%'}}>
                                    <div className="card4-header" >Diagnostics and Maintenance Services</div>
                                </div>
                                <ul className="card2-list">
                                    <li className="elementor-icon-list-item">
                                        Advanced diagnostics for identifying and resolving technical issues quickly.
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Regular maintenance programs to prevent breakdowns and extend equipment
                                        lifespan.
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Oil changes, filter replacements, and calibration services.
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Mobile service teams for on-site support and emergency repairs.
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

export default Card2;

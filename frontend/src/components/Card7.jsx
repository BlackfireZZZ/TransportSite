import React from 'react';
import '../FullWidthContainer.css';
import '../Card1.css';
import '../Card2.css';
import '../Card4.css'
import PhotoSlider from "./PhotoSlider";

const Card7 = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <div className="card2">
                    <div className="card2-content">
                        <div className="card1-body">
                            <div className="card2-body-right"> {/* Перенесено справа */}
                                <div className="slider" style={{width: '400px', height: '350px'}}>
                                    <img src={require('../assets/logistics2.jpg')}/>
                                </div>
                            </div>
                            <div className="card2-body-left"> {/* Теперь находится слева */}
                                <div className="card4-header-container" style={{width: '70%'}}>
                                    <div className="card4-header" >Purchase of special equipment</div>
                                </div>
                                <ul className="card2-list">
                                    <li className="elementor-icon-list-item">
                                        Appraisal and purchase of special equipment
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Dismantling and transportation of equipment
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

export default Card7;

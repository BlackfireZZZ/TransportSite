// Card1.js
import React from 'react';
import '../Card1.css';
import gearIcon from '../icons/gear.png'; // Иконка шестеренки
import PhotoSlider from "./PhotoSlider";

const Card1 = () => {
    return (
        <div className="card1">
            <div className="card1-content">
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container">
                            <div className="card1-header">Vehicle import</div>
                        </div>
                        <ul className="card1-list">
                            <li className="elementor-icon-list-item">
                                Selection of customized cars <img src={gearIcon} alt="Gear Icon" className="gear-icon"/>
                            </li>
                            <li className="elementor-icon-list-item">
                                Issuing all necessary documents for import
                            </li>
                            <li className="elementor-icon-list-item">
                                Transportation of the car to the client
                            </li>
                        </ul>
                    </div>
                    <div className="card1-body-right">
                        <PhotoSlider
                            photos={['logistics1.jpg', 'logistics2.jpg', 'logistics3.jpg']}
                            height = '100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card1;

// Card1.js
import React from 'react';
import '../Card1.css';
import PhotoSlider from "./PhotoSlider";
import DownloadLink from "./DownloadLink";

const Card3 = () => {
    return (
        <div className="card1">
            <div className="card3-content">
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container">
                            <div className="card1-header">Sale of special equipment </div>
                        </div>
                        <DownloadLink pdf_path="MACHINERY.pdf" text='List of production'/>
                        <ul className="card1-list" style={{width: '400px'}}>
                            <li className="elementor-icon-list-item">
                                Wide range of new and used special equipment
                            </li>
                            <li className="elementor-icon-list-item">
                                Selection of equipment appropriate to the specific tasks
                            </li>
                            <li className="elementor-icon-list-item">
                                Service maintenance
                            </li>
                        </ul>
                    </div>
                    <div className="card1-body-right">
                        <div className="slider" style={{ height: '350px', width: '450px'}}>
                            <img src={require('../assets/1.jpg')} style={{ width: 'auto', height: '350px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card3;

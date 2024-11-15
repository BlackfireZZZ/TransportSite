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
                        <ul className="card1-list">
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
                        <PhotoSlider
                            photos={[
                                'special_equipment1.jpg',
                                'special_equipment2.jpg',
                                'special_equipment3.jpg',
                                'special_equipment4.jpg',
                                'special_equipment5.jpg',
                            ]}
                            height = '100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card3;

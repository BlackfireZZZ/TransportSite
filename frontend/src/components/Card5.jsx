import React from 'react';
import '../Card1.css';
import PhotoSlider from "./PhotoSlider";

const Card5 = () => {
    return (
        <div className="card1">
            <div className="card3-content" style={{width: '55%'}}>
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container">
                            <div className="card1-header">Consulting </div>
                        </div>
                        <a
                            href={'/feedback'}
                            style={{
                            margin: '0px 20px',
                            textDecoration: 'underline',
                            color: 'blue',
                            cursor: 'pointer',
                        }}>
                            Give us your feedback
                        </a>

                        <ul className="card1-list">
                            <li className="elementor-icon-list-item">
                                Consultations based on your needs
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

export default Card5;

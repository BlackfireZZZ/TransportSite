import React from 'react';
import '../Card1.css';
import PhotoSlider from "./PhotoSlider";

const Card5 = () => {
    return (
        <div className="card1">
            <div className="card3-content" style={{width: '55%'}}>
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container" style={{width: '70%'}}>
                            <div className="card1-header">Consulting</div>
                        </div>

                        <a
                            href={'/feedback'}
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#fcb900',
                                color: '#000000',
                                padding: '5px 15px',
                                borderRadius: '25px', // Сильно скругленные углы
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                cursor: 'pointer',
                                margin: '0px 20px',
                                width: '200px'
                            }}
                        >
                            {'Give us your feedback'}
                        </a>

                        <ul className="card1-list">
                            <li className="elementor-icon-list-item">
                                Consultations based on your needs
                            </li>
                        </ul>
                    </div>
                    <div className="card1-body-right">
                        <div className="slider" style={{width: '400px', height: '350px'}}>
                            <img src={require('../assets/logistics2.jpg')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card5;

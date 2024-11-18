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

                        <ul className="card1-list" style={{width: '350px'}}>
                            <li className="elementor-icon-list-item">
                                Consultations based on your needs
                            </li>
                        </ul>

                        <a
                            href={'/contact-us'}
                            style={{
                                display: 'inline-flex', // Используем flexbox
                                justifyContent: 'center', // Центрирование по горизонтали
                                alignItems: 'center', // Центрирование по вертикали
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
                                height: '60px',
                                width: '200px'
                            }}
                        >
                            {'Contact us'}
                        </a>

                    </div>
                    <div className="card1-body-right">
                        <div className="slider" style={{width: '400px', height: '350px'}}>
                            <img src={require('../assets/5.jpg')} style={{width: 'auto', height: '350px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card5;

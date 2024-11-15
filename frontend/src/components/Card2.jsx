import React from 'react';
import '../FullWidthContainer.css';
import '../Card1.css';
import '../Card2.css'
import PhotoSlider from "./PhotoSlider";

const Card2 = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <div className="card2">
                    <div className="card2-content">
                        <div className="card1-body">
                            <div className="card2-body-right"> {/* Перенесено справа */}
                                <PhotoSlider
                                    photos={['logistics1.jpg', 'logistics2.jpg', 'logistics3.jpg']}
                                    height="100%"
                                />
                            </div>
                            <div className="card2-body-left"> {/* Теперь находится слева */}
                                <div className="card2-header-container">
                                    <div className="card2-header">Vehicle export</div>
                                </div>
                                <ul className="card2-list">
                                    <li className="elementor-icon-list-item">
                                        Evaluation and preparation of the car for export
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Registration of export documents
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Overseas delivery organization
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

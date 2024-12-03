import React from 'react';
import '../FullWidthContainer.css';
import '../Card1.css';
import '../Card2.css';
import '../Card4.css'
import PhotoSlider from "./PhotoSlider";
import DownloadLink from "./DownloadLink";

const Card4 = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <div className="card2">
                    <div className="card2-content">
                        <div className="card1-body">
                            <div className="card2-body-right"> {/* Перенесено справа */}
                                <div className="slider" style={{width: '500px', height: '350px'}}>
                                    <img src={require('../assets/rental.jpg')} style={{ width: 'auto', height: '350px'}}/>
                                </div>
                            </div>
                            <div className="card2-body-left"> {/* Теперь находится слева */}
                                <div className="card4-header-container" style={{width: '60%'}}>
                                    <div className="card4-header">Long-Term Equipment Rental Services</div>
                                </div>
                                <ul className="card2-list" style={{width: '500px'}}>
                                    <li className="elementor-icon-list-item">
                                        Wide range of specialized equipment available for long-term leasing
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Flexible rental terms (min. 3 months, up to 5 years)
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Well-maintained machinery
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Technical support and on-site maintenance included in rental agreements.
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        Discounts for regular customers/at volume
                                    </li>
                                    <DownloadLink pdf_path={'MACHINERY.pdf'} text={'production'}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card4;

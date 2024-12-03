// Card1.js
import React, { useState } from 'react';
import '../Card3.css';
import '../Card1.css';


const Card1 = () => {
    const [selectedImage, setSelectedImage] = useState(require('../assets/transport1.jpg'));

    const equipmentList = [
        { name: "Excavators CAT 220/230", image: require('../assets/transport3.jpg') },
        { name: "Tractors New Holland T7/T8", image: require('../assets/transport1.jpg') },
        { name: "Trucks CAT 773/777", image: require('../assets/transport5.jpg') },
        { name: "Dozers Komatsu D155/275", image: require('../assets/transport2.jpg') },
        { name: "Agricultural equipment John Deere 1210/1470", image: require('../assets/transport4.jpg') },
    ];

    return (
        <div className="card3" style={{height: '770px'}}>
            <div className="card3-content">
                <div className="card1-body">
                    <div className="card1-body-left">
                        <div className="card1-header-container">
                            <div className="card1-header">Capital Repair of Specialized Equipment</div>
                        </div>
                        <ul className="card1-list" style={{width: '500px', padding: '20px 20px 0px 20px'}}>
                            <li className="elementor-icon-list-item">
                                Comprehensive overhaul of engines, hydraulics, transmissions, and other key systems.
                            </li>
                            <li className="elementor-icon-list-item">
                                Use of certified spare parts to ensure long-lasting performance.
                            </li>
                            <li className="elementor-icon-list-item">
                                Tailored repair plans to meet exactly your needs.
                            </li>
                            <li className="elementor-icon-list-item">
                                Expertise in repairing:
                            </li>
                        </ul>
                        <div className="equipment-container">
                            <ul className="equipment-list">
                                {equipmentList.map((item, index) => (
                                    <li
                                        key={index}
                                        className="equipment-item"
                                        onClick={() => setSelectedImage(item.image)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                            <div className="equipment-image">
                                <img
                                    src={selectedImage}
                                    alt="Equipment"

                                />
                            </div>
                        </div>
                    </div>
                    <div className="card1-body-right" style={{paddingTop: '70px'}}>
                        <div className="slider" style={{height: '400px', width: '550px'}}>
                            <img src={require('../assets/capital_repair.jpg')} style={{width: 'auto', height: 'auto'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card1;

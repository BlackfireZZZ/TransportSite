import React from 'react';
import '../FullWidthContainer.css';
import Card1 from "./Card1";


const FullWidthContainer = () => {
    return (
        <div className="fullWidthContainer">
            <div className="fullWidthContainer__innerContent">
                <Card1 />
            </div>
        </div>
    );
};

export default FullWidthContainer;

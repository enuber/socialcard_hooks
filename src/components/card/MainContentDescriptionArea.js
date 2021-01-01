import './MainContentDescriptionArea.css';
import React from 'react';

const MainContentDescriptionArea = props => {

    const showDesc = () => {
        if (!props.product) {
            return null;
        } else {
            return (
                <div className="descContainer">
                    <h2>{props.product}</h2>
                    <p>{props.productDesc}</p>
                    <p className="makeLightGrey">{props.webAddress}</p>
                </div>
            )
        }
    }

    return (
        <div>
            {showDesc()}
        </div>
    )
}

export default MainContentDescriptionArea;
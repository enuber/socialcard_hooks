import './CardMainContent.css';
import React from 'react';
import MainContentTopArea from './MainContentTopArea';
import MainContentDescriptionArea from './MainContentDescriptionArea';

const CardMainContent = props => {
    return (
        <div className="mainCard">
            <MainContentTopArea
                avatar={props.avatar}
                color = {props.color}
                firstName={props.firstName}
                lastName={props.lastName}
                personalPic={props.personalPic}
                product={props.product}
            />
            <MainContentDescriptionArea
                product={props.product}
                productDesc={props.productDesc}
                webAddress={props.webAddress}
            />
        </div>
    )
}

export default CardMainContent;
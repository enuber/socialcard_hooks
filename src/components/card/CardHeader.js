import './CardHeader.css';
import React from 'react';

const CardHeader = props => {

    const showContent = () => {
        if (!props.companyName) {
           return null;
        } else {
            return (
                <div>
                    <img className="avatar" src={props.avatar} alt=""/>
                    <div className="headerTextContainer">
                        <p><span className="companyName">{`${props.companyName}`}</span><span className="makeLightGrey">{` @${props.companyName.replace(/[^A-Za-z0-9!?]/g,'')}  •  ${props.randomDate}`}</span></p>
                        <p>{`${props.product}`}</p>
                        <p>
                            <span>{`{ author: `}</span>
                            <span className="makeBlue">{`@${props.firstName.charAt(0)}${props.lastName}`}</span>
                            <span>{`}`}</span>
                        </p>
                    </div>
                </div>
            )
        }
    }

    return(
        <div>
            {showContent()}
        </div>
    )
};

export default CardHeader;
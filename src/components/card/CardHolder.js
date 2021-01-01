import './CardHolder.css'
import React from 'react';

const CardHolder = props => {
    return(
        <div>
            <div className="card ">
                {props.children}
            </div>
            <hr />
        </div>
    )
};

export default CardHolder;
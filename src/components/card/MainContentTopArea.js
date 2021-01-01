import './MainContentTopArea.css';
import React from 'react';

const MainContentTopArea = props => {

    //changing light colors for darker colors in background
    const checkColor = color => {
        switch (color) {
            case 'azure':
                color = 'red';
                break;
            case 'ivory':
                color = 'turquoise';
                break;
            case 'lavender':
                color = 'purple';
                break;
            case 'mint green':
                color = 'green';
                break;
            case 'sky blue':
                color = 'blue';
                break;
            case 'white':
                color = 'black';
                break;
            case 'yellow':
                color = 'salmon';
                break;
            default:
                break;
        }
        return color;
    }

    const showTopContent = () => {
        if (!props.avatar) {
            return null;
        } else {
            const {color} = props;
            let correctColor = checkColor(color);
            return (
                <div style={{
                    backgroundColor: `${correctColor}`,
                    borderRadius: '10px 10px 0 0'
                }}>
                    <div className="topAreaContainer">
                        <img className="avatarMainContent" src={props.avatar} alt="" />
                        <h1>{props.product}</h1>
                        <div className="nameContainer">
                            <span className="nameOfPerson"
                                  style={{color: `${correctColor}`
                            }}>
                                {`${props.firstName} ${props.lastName}`}
                            </span>
                            <img className="personalPic" src={props.personalPic} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            {showTopContent()}
        </div>
    )
}

export default MainContentTopArea;
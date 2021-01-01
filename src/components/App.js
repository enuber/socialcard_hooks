import React, {useState, useEffect} from 'react';
import CardHolder from './card/CardHolder';
import CardHeader from './card/CardHeader';
import CardMainContent from './card/CardMainContent';
import { generateList } from './helper_functions/generatedata';

const App = () => {

    const [socialCardArr, setSocialCardArr] = useState([]);

    useEffect(() => {
        setSocialCardArr(generateList());
    },[]);

    const renderCards = () => {
        const cards = socialCardArr.map(card =>
            (
                <CardHolder key={card.key}>
                    <CardHeader
                        avatar={card.avatar}
                        companyName={card.companyName}
                        firstName={card.firstName}
                        lastName={card.lastName}
                        product={card.product}
                        randomDate={card.randomDate}
                    />
                    <CardMainContent
                        avatar={card.avatar}
                        color={card.color}
                        firstName={card.firstName}
                        lastName={card.lastName}
                        personalPic={card.personalPic}
                        product={card.product}
                        productDesc={card.productDesc}
                        webAddress={card.webAddress}
                    />
                </CardHolder>
            )
        );
        return cards;
    };

    return (
        <div>
            <h2>Social Cards - React Using hooks</h2>
            <hr />
            {renderCards()}
        </div>
    )

};

export default App;


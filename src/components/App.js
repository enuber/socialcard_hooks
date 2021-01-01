import React from 'react';
import CardHolder from './card/CardHolder';
import CardHeader from './card/CardHeader';
import CardMainContent from './card/CardMainContent';
import { generateList } from './helper_functions/generatedata';

class App extends React.Component {

    state = {
        socialCardArr : []
    };

    componentDidMount() {
        const socialCardArr = generateList();
        this.setState({
            socialCardArr
        });
    }

    renderCards = () => {
        const cards = this.state.socialCardArr.map(card =>
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

    render() {
        return (
            <div>
                <h2>Social Cards - React Using Component State and Props</h2>
                <hr />
                {this.renderCards()}
            </div>
        )
    }
};

export default App;


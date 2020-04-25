import React from 'react';
import Card from './Card';

const cardList = (props) => {
    const {
        cards,
        light
    } = props;

    return (
        <div className="CardList container-sm p-0">
            <div className="row">
                {cards.map(card => {
                    let stock = (card.fansIncrement)? 'increment' : 
                    (card.fansDecrement) ? 'decrement' : '';
                    return (
                        <Card key={card.id}
                            card={card}
                            stock={stock}
                            light={light}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default cardList;
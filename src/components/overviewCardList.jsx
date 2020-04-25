import React from 'react';
import OverviewCard from './overviewCard';

const OverviewCardList = (props) => {
    const {
        overviewCards,
        light
    } = props;

    return (
        <div className="overviewCardList container mt-5 p-0">
            <h3 className='text-grayishBlue mb-4'>
                <strong>Overview - Today</strong>
            </h3>
            <div className="d-lg-flex flex-wrap justify-content-between">
                {overviewCards.map(overviewCard => {
                    let stock = (overviewCard.increment)? 'increment' : 
                    (overviewCard.decrement) ? 'decrement' : '';
                    return (
                        <OverviewCard key={overviewCard.id}
                            overviewCard={overviewCard}
                            stock={stock}
                            light={light}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default OverviewCardList;
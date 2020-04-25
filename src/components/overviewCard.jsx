import React from 'react';
import '../assets/styles/OverviewCard.css';

const OverviewCard = (props) => {
    const {
        overviewCard,
        stock,
        light,
    } = props;

    return (
        <div className='card mb-3 mx-2 overviewCard p-0'>
            <div className={`card-body d-flex flex-column justify-content-between ${(light)? 'bg-paleBlue' : 'bg-desaturatedBlue'}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <strong className={`${(light)? 'text-grayishBlue' : 'text-darkPaleBlue'}`}>{overviewCard.title}</strong>
                    <i className={`icon-${overviewCard.social}`}></i>
                </div>
                <div className='d-flex justify-content-between align-items-end mt-3'>
                    <h3 className={`m-0 quantity ${(light)? 'text-darkBlue': 'text-lwhite'}`}>
                        <strong>{overviewCard.quantity}</strong>
                    </h3>
                    
                    <strong className={`mb-2 ${stock} stock-percent`}><i className={`icon-${stock}`}></i> {(overviewCard.increment)? overviewCard.increment : overviewCard.decrement}%</strong>
                </div>
            </div>
        </div>
    );
}

export default OverviewCard;
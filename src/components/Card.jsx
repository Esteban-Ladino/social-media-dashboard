import React from 'react';
import '../assets/styles/Card.css'

const Card = (props) => {
    const {
        card,
        stock,
        light
    } = props;

    return (
        <div className={`card col-md rounded-lg bt-${card.social} px-0 mx-3 mb-4`} >
            <div className={`card-body d-flex flex-column align-items-center p-4 ${(light)? 'bg-paleBlue' : 'bg-desaturatedBlue'}`}>
                <div className='d-flex align-items-center'>
                    <i className={`icon-${card.social}`}></i>
                    <strong className={`userName ml-2 ${(light)? 'text-grayishBlue' : 'text-darkPaleBlue'}`}> {card.userName}</strong>
                </div>
                <h1 className={`fansNumber ${(light)? 'text-darkBlue': 'text-lwhite'}`}><strong>{card.fansNumber}</strong></h1>
                <p className='fansType text-uppercase text-grayishBlue'>{card.fansType}</p>
                <div className={`${stock} d-flex align-items-center`}>
                    <i className={`icon-${stock}`}></i>
                    <strong className='stock-detail'>{(card.fansIncrement)? card.fansIncrement : card.fansDecrement} Today</strong>
                </div>
            </div>
        </div>
    );
}

export default Card;
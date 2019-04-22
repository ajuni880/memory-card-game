import React, { useContext } from 'react'
import Ctx from '../context/context';

const Card = ({ card }) => {
    const { flipCard } = useContext(Ctx);
    return (
        <div className="card" onClick={() => flipCard(card.id)}>
            <div className={`card__inner ${card.isFlipped ? 'card--flip' : ''} ${card.isMatched ? 'card--matched' : ''}`}>
                <div className="card__front"></div>
                <div className="card__back">{card.content}</div>
            </div>
        </div>
    )
}

export default Card
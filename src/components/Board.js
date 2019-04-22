import React, { useState } from 'react';
import CardsGrid from './CardsGrid';
import Ctx from '../context/context';

const Board = ({ items = []}) => {
    const [cards, setCards] = useState(items)

    const flipCard = (id) => {
        if (areTwoFlippedCards(cards)) return;
        const card = cards.find((c) => c.id === id)
        card.isFlipped = !card.isFlipped

        setTimeout(() => {
            if (areTwoFlippedCards(cards)) {
                const [first, second] = getFlippedCards(cards)
                if (first.content === second.content) {
                    first.isMatched = true;
                    second.isMatched = true;
                } else {
                    first.isFlipped = false;
                    second.isFlipped = false;
                }
                const gameOver = cards.filter((c) => !c.isMatched).length === 0;
                if (gameOver) alert('Game is over');
                setCards([...cards])
            }
        }, 1000)

        setCards([...cards])
    }

    const areTwoFlippedCards = () => getFlippedCards(cards).length === 2
    const getFlippedCards = () => cards.filter(c => c.isFlipped && !c.isMatched)

    return (
        <div className="container">
            <Ctx.Provider value={{ cards, flipCard }}>
                <CardsGrid />
            </Ctx.Provider>
        </div>
    )
}

export default Board;
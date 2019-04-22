import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

import './styles/index.scss';

const getItems = (n = 12) => {
    let counter = 0;

    const getRandom = (cards) => {
        const r = Math.floor(Math.random() * (n / 2));
        if (cards[r]) return getRandom(cards);
        return r;
    }

    const createCards = () => {
        const len = n / 2;
        const cards = new Array(len);
        for (let i = 0; i < len; i++) {
            let pos = getRandom(cards);
            cards[pos] = { id: counter++, content: i, isFlipped: false, isMatched: false };
        }
        return cards;
    }

    return [...createCards(), ...createCards()];
}

ReactDOM.render(<Board items={getItems()}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

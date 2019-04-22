import React, { useContext } from 'react';
import Card from './Card';

import Ctx from '../context/context';

const CardsGrid = () => {
    const { cards } = useContext(Ctx);
    return (
        <div className="cards-grid">
            {
                cards.map((c,i) => <Card key={i} card={c} />)
            }
        </div>
    )
}

export default CardsGrid;
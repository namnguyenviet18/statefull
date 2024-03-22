import React, { useState } from 'react';

const Results = ({ fiftyFifty }) => {
    return (
        <h1>{fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>
    );
};

const GameOfChance = () => {
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const fiftyFifty = Math.random() >= 0.5;

    return (
        <div>
            <button onClick={handleClick}>Play Again</button>
            <Results fiftyFifty={fiftyFifty} />
            <p>{'Turn: ' + counter}</p>
        </div>
    );
};

export default GameOfChance;
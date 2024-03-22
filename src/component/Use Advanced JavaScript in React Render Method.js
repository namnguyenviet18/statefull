import React, { useState } from 'react';

const inputStyle = {
    width: 235,
    margin: 5
};

const MagicEightBall = () => {
    const [userInput, setUserInput] = useState('');
    const [randomIndex, setRandomIndex] = useState('');

    const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
    ];

    const ask = () => {
        if (userInput) {
            const newIndex = Math.floor(Math.random() * possibleAnswers.length);
            setRandomIndex(newIndex);
            setUserInput('');
        }
    };

    return (
        <div>
            <input
                type='text'
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                style={inputStyle}
            />
            <br />
            <button onClick={ask}>Ask the Magic Eight Ball!</button>
            <br />
            <h3>Answer:</h3>
            <p>{possibleAnswers[randomIndex]}</p>
        </div>
    );
};

export default MagicEightBall;
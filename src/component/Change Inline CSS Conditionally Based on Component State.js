import React, { useState } from 'react';

const GateKeeper = () => {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    // Dynamically update the input border style based on the input length
    const inputStyle = {
        border: input.length > 15 ? '3px solid red' : '1px solid black'
    };

    return (
        <div>
            <h3>Don't Type Too Much:</h3>
            <input
                type="text"
                style={inputStyle}
                value={input}
                onChange={handleChange}
            />
        </div>
    );
};

export default GateKeeper;
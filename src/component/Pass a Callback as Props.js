import React, { useState } from 'react';

const MyApp = () => {
    const [inputValue, setInputValue] = useState('');

    // Callback function to handle input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            {/* GetInput component */}
            <GetInput input={inputValue} handleChange={handleChange} />
            {/* RenderInput component */}
            <RenderInput input={inputValue} />
        </div>
    );
};

const GetInput = (props) => {
    return (
        <div>
            <h3>Get Input:</h3>
            {/* Input element with value and onChange attributes */}
            <input
                value={props.input}
                onChange={props.handleChange}
            />
        </div>
    );
};

const RenderInput = (props) => {
    return (
        <div>
            <h3>Input Render:</h3>
            {/* Display input value received as a prop */}
            <p>{props.input}</p>
        </div>
    );
};

export default MyApp;
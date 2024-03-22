import React, { useState } from "react";

function ControlledInput() {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <div>
            {/* Input element with value and onChange attributes */}
            <input
                value={input}
                onChange={(event) => handleChange(event)}
            />
            <h4>Controlled Input:</h4>
            <p>{input}</p>
        </div>
    );
}

export default ControlledInput;
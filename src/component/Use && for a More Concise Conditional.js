import React, { useState } from 'react';

const MyComponent = () => {
    const [display, setDisplay] = useState(true);

    const toggleDisplay = () => {
        setDisplay(prevDisplay => !prevDisplay);
    };

    return (
        <div>
            <button onClick={toggleDisplay}>Toggle Display</button>
            {display && <h1>Displayed!</h1>}
        </div>
    );
};

export default MyComponent;

import React, { useState } from 'react';

function MyComponent() {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <div>
            <button onClick={toggleVisibility}>Click me</button>
            {visibility && <h1>Now you see me!</h1>}
        </div>
    );
}

export default MyComponent;

import React, { useState } from 'react';
function MyComponent() {
    const [name] = useState('freeCodeCamp');

    return (
        <div>
            {/* Render the value of name in an h1 tag */}
            <h1>{name}</h1>
        </div>
    );
}

export default MyComponent;
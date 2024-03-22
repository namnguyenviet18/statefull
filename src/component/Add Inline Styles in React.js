import React, { useState } from 'react';

const Colorful = () => {
    const [styles, setStyles] = useState({
        color: 'purple',
        fontSize: '40px',
        border: '2px solid purple'
    });

    return (
        <div style={styles}>Style Me!</div>
    );
};

export default Colorful;
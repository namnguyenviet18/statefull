import React, { useState } from 'react';

const Colorful = () => {
    const [styles, setStyles] = useState({
        color: 'red',
        fontSize: '72px'
    });

    return (
        <div style={styles}>Big Red</div>
    );
};

export default Colorful;
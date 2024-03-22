

import React, { useState } from 'react';

const MyApp = () => {
    const [name, setName] = useState('CamperBot');

    return (
        <div>
            {/* Pass name as a prop to Navbar */}
            <Navbar name={name} />
        </div>
    );
};

const Navbar = (props) => {
    // Destructure the name prop
    const { name } = props;

    return (
        <div>
            {/* Display name in h1 tag */}
            <h1>Hello, my name is: {name}</h1>
        </div>
    );
};

export default MyApp;
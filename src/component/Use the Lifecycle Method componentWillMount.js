import React, { useEffect } from 'react';

const MyComponent = () => {
    useEffect(() => {
        console.log("Component is mounting...");
        // Code inside this block will be executed when component mounts
        // Change code here if needed
    }, []); // Empty dependency array ensures this effect runs only once

    return <div />;
};

export default MyComponent;
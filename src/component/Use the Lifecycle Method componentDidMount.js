import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [activeUsers, setActiveUsers] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            // Simulate API call
            setTimeout(() => {
                setActiveUsers(1273);
            }, 2500);
        };

        fetchData();

        // Cleanup function (optional)
        return () => {
            // Perform cleanup here if needed
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <h1>Active Users: {activeUsers}</h1>
        </div>
    );
};

export default MyComponent;
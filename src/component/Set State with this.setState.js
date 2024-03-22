
import React, { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("freeCodeCamp");

    const handleClick = () => {
        setName('React Rocks!');
    }

    return (
        <div>
            {/* Button với onClick handler gọi đến hàm handleClick */}
            <button onClick={handleClick}>Click me</button>
            {/* Hiển thị giá trị state hiện tại */}
            <h1>{name}</h1>
        </div>
    );
}
export default MyComponent;
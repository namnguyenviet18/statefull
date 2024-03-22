import React, { useState } from 'react';

const MyComponent = () => {
    // Khởi tạo state và hàm setState tương ứng bằng hook useState
    const [text, setText] = useState("Hello");

    // Định nghĩa hàm handleClick để cập nhật state khi nút được click
    const handleClick = () => {
        setText("You clicked!");
    };

    return (
        <div>
            {/* Thêm onClick handler để gọi handleClick khi nút được click */}
            <button onClick={handleClick}>Click Me</button>
            {/* Hiển thị giá trị hiện tại của state */}
            <h1>{text}</h1>
        </div>
    );
};

export default MyComponent;
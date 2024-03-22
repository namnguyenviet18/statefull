import React, { useState } from 'react';

const CheckUserAge = () => {
    const [input, setInput] = useState('');
    const [userAge, setUserAge] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        setUserAge('');
    };

    const submit = () => {
        setUserAge(input);
    };

    const buttonOne = <button onClick={submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;

    return (
        <div>
            <h3>Enter Your Age to Continue</h3>
            <input
                style={{ width: 235, margin: 5 }}
                type='number'
                value={input}
                onChange={handleChange}
            />
            <br />
            {userAge === '' ? buttonOne : userAge < 18 ? buttonThree : buttonTwo}
        </div>
    );
};

export default CheckUserAge;
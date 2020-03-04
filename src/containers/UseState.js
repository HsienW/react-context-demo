import React, {useState} from 'react'

const testFunction = (event) => {
    // setUser('Robby')
};

export const UseState = () => {

    const [user, setUser] = useState('Anonymous');

    return (
        <div>
            <button onClick={testFunction}>click</button>
            <h3>Hi {user}</h3>
        </div>
    );
};
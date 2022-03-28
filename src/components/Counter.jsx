import React, { useState } from 'react'

export default function Counter() {
    // let count = 0;
    const [count, setCount] = useState(0);

    function handleCount(num) {
        setCount(count + num)

    }
    console.log(count)
    return (
        <div>
            <h1>{count} </h1>
            <button onClick={() => handleCount(+1)}> ADD</button>
            <button onClick={() => handleCount(-1)}> DEC</button>

        </div>
    )
}

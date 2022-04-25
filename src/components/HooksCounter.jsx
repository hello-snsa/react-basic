import React, { useState } from 'react'

export default function HooksCounter() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1)
    }
    return (
        <div>

            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={addCount}>Add</button>

        </div>
    )
}

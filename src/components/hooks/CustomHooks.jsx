import React, { useState } from 'react'
import useLocal from './useLocal';

export default function CustomHooks() {
    const key = "uname";

    const [text, setText] = useState("");
    const [data, setData] = useState(null)

    // custom hook
    useLocal({ key, data });

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleClick = () => {
        setData(text);
    }


    return (
        <div>

            <h3>Custom Hooks</h3>
            <input type="text" onChange={(e) => (handleText(e))} value={text} />

            <button onClick={handleClick} >OK</button>
            {/* <h1>Users:{users}</h1> */}
        </div>
    )
}

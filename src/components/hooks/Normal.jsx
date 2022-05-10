import React, { useEffect, useState } from 'react'

export default function Normal() {
    const previousValue = localStorage.getItem("uname1");

    const [text, setText] = useState("");
    const [data, setData] = useState([previousValue])


    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleClick = () => {
        if (data !== null)
            setData([...data, text]);
    }

    useEffect(() => {
        localStorage.setItem("uname1", data);
    }, [data])

    return (
        <div>

            <h3>Normal component</h3>
            <input type="text" onChange={(e) => (handleText(e))} value={text} />

            <button onClick={handleClick} >OK</button>

        </div>
    )
}

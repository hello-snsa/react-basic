import React from 'react'

export default function Inlinecss() {

    const myStyle = {
        color: "tomato",
        fontSize: "xx-small"
    }

    return (
        <>
            <h1 style={{ color: "red" }}>pure</h1>
            <h1 style={myStyle}>with vaiable</h1>
            <h1 style={{ ...myStyle, color: "red" }}>with both</h1>
        </>
    )
}

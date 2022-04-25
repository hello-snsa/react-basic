import React from 'react'

function Demopage({ data }) {
    if (!data) {
        throw new Error("data is false")
    }

    return (
        <div>
            <p>Demopage data: {data}</p>
        </div>
    )
}

export default Demopage
import React, { useState } from 'react'

export default function Form2() {

    const [text, setText] = useState({});
    const [data, setData] = useState([])

    const handleText = (e) => {
        setText({ ...text, [e.name]: [e.value] })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, text])
        setText({ uname: "", uemail: "" })
    }
    return (
        <>
            <h1>Form</h1>

            <form onSubmit={handleSubmit}>
                Name: <input value={text.uname} type="text" name="uname" onChange={(e) => handleText(e.target)} />
                Email:<input value={text.uemail} type="text" name="uemail" onChange={(e) => handleText(e.target)} />

                <input type="submit" onClick={handleSubmit} />
            </form>


            <h1>Data :</h1>
            {
                data.map((e) => (
                    <>
                        <p>{e.uname}</p>
                        <p>{e.uemail}</p>
                    </>
                ))
            }
        </>
    )
}

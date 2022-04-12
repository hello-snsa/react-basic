import React, { useState } from 'react'

export default function Form() {

    const [uname, setUname] = useState();
    const [uemail, setUemail] = useState();

    const [data, setData] = useState([])

    const handleUname = (e) => {
        setUname(e.target.value)
    }
    const handleUemail = (e) => {
        setUemail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, { uname, uemail }])
    }
    return (
        <>
            <h1>Form</h1>

            <form onSubmit={handleSubmit}>
                Name: <input value={uname} type="text" onChange={(e) => handleUname(e)} />
                Email:<input value={uemail} type="text" onChange={(e) => handleUemail(e)} />

                <input type="submit" value="ok" />
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

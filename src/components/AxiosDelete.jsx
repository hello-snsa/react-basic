import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function AxiosDelete() {
    const [user, setUser] = useState([]);
    const [err, setErr] = useState();
    const [text, setText] = useState({});

    const handelText = ((e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    })

    const handleForm = ((e) => {
        e.preventDefault();
        setData();
    })
    const getData = async () => {
        try {
            const myData = await axios.get('http://localhost:3004/user');
            console.log("myData", myData);
            setUser(myData.data);
            setErr(null);
        }
        catch (err) {
            console.log("error is :", err)
            setErr(err);
        }
    }
    async function setData() {
        await axios.post('http://localhost:3004/user/', text)
            .then(response => console.log("response", response))
        getData();
    }
    async function handleDelete(id) {
        await axios.delete(`http://localhost:3004/user/${id}`)
        getData();
    }

    useEffect(() => {
        getData()
    }, [])

    return (<>

        <h1>Axios Post</h1>
        <h3>Form</h3>

        <form onSubmit={handleForm}>
            <input type="text" name="user" value={text.user} onChange={handelText} />
            <input type="text" name="email" value={text.email} onChange={handelText} />
            <input type="text" name="phone" value={text.phone} onChange={handelText} />
            <input type="submit" value="post data" />
        </form>

        <div>
            <h1>user</h1>
            {
                user.map((e) => (
                    <div key={uuid()}>

                        <p key={uuid()}>
                            {e.id}{" "}{e.user}{" "}{e.email}{" "}{e.phone}
                            {" "}
                            <button onClick={() => handleDelete(e.id)}>Delete</button>
                        </p>
                    </div>
                ))
            }
            {err
                && <>
                    <h3><u>Error</u></h3>
                    <p>Status Code:{err.response.status}</p>
                    <p>Error Type: {err.name}</p>
                    <p>Message: {err.message}</p>
                    <p>Url: {err.request.responseURL}</p>
                </>
            }

        </div>

    </>
    )
}


import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function AxiosPost() {
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

    useEffect(() => {
        getData();
    }, [])

    return (<>

        <h1>Axios Post</h1>
        <h3>Form</h3>

        <form onSubmit={handleForm}>
            Name: <input type="text" name="user" value={text.user} onChange={handelText} />
            Email: <input type="text" name="email" value={text.email} onChange={handelText} />
            Phone: <input type="text" name="pass" value={text.phone} onChange={handelText} />
            <input type="submit" value="post data" />
        </form>

        <div>
            <h1>Register User </h1>
            {
                user.map((e, i) => (
                    <p key={uuid()}>{" "}{e.user}{" "}{e.email}{" "}{e.phone}</p>
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

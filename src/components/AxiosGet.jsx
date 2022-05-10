import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { v4 as uuid } from 'uuid';

export default function AxiosGet() {

    const [user, setUser] = useState([]);
    const [err, setErr] = useState();

    const getData = async () => {
        try {
            const myData = await axios.get('http://localhost:3004/user');
            console.log(myData.data);
            setUser(myData.data);
            setErr(null);
        }
        catch (err) {
            console.log("error is :", err)
            setErr(err);
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>user</h1>
            {
                user.map((e) => (
                    <p key={uuid()}>{e.id}{" "}{e.user}{" "}{e.email}{" "}{e.phone}</p>
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
    )
}

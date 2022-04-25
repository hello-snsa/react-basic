import React, { useState } from 'react'

export default function State() {

    const [data1, setData1] = useState(5);

    // const [data1, setData1] = useState(() => {
    //     console.log("hello")
    //     return 5;
    // });

    const [data2, setData2] = useState(0);
    // const myFun = fun();

    const handleClick = (data, setData) => {
        // setData(data + 1);
        // setData(data + 1);

        setData(data => data + 1);
        setData(data => data + 1);

        console.log("data value inside is:", data)

    }
    console.log("data value is:", data1)

    function handleAlert() {
        alert("hello")
    }

    function fun() {
        console.log("data1", data1);
        console.log("data2", data2);
        alert("hello fun")

    }

    return (<>
        <p>Data1:{data1}</p>
        <p>Data2:{data2}</p>
        <button onClick={() => handleClick(data1, setData1)}>data 1</button>
        <button onClick={() => handleClick(data2, setData2)}>data 2</button>
        <button onClick={() => handleAlert()}>Alert</button>
    </>
    )
}

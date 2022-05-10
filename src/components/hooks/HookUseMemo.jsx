import React, { useMemo, useState } from 'react'

export default function HookUseMemo() {

    const [data1, setData1] = useState(5);
    const [data2, setData2] = useState(0);
    const [data3, setData3] = useState(0);

    // const myFun = fun();
    const myFun = useMemo(() => {
        return fun();
    }, []);

    const handleClick = (name, setData) => {
        setData(data => data + 1);
        console.log(`${name} from handleClick`)
        setData3(1)

    }
    // const myalert = handleAlert()

    function handleAlert() {
        alert("hello from handleAlert")
    }

    function fun() {
        console.log("data1 from fun ");
        console.log("data2 from fun");
    }
    // const myHeavy = heavy();
    const myHeavy = useMemo(() => {
        return heavy()
    }, [data3])

    function heavy() {
        for (let i = 0; i < 20000 * 100000; i++) {
        }
        return console.log("heavy")
    }


    return (
        <>
            <p>Data1:{data1}</p>
            <p>Data2:{data2}</p>
            <p>Data3:{data3}</p>

            {/* myFun:{() => myFun()} */}

            <button onClick={() => handleClick("data1", setData1)}>data 1</button>
            <button onClick={() => handleClick("data2", setData2)}>data 2</button>
        </>
    )
}

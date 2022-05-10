import React, { useEffect, useState } from 'react'

export default function useLocal({ key, data }) {

    const previousValue = localStorage.getItem(key);
    const [newData, setNewData] = useState([previousValue]);

    useEffect(() => {
        if (data !== null)
            setNewData([...newData, data]);

    }, [data]);

    useEffect(() => {
        localStorage.setItem(key, newData)
    }, [newData])

    return newData;
}

import React from 'react'
import {v4 as uuid} from "uuid"

const arr = [1,2,3,4,5,6,1];

export const List = () => {
  return (
    <div>
        <h1>List</h1>
        {arr.map((number)=><p key={uuid()}>{number}</p>)}
    </div>
  )
}

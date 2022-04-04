import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

export const Todo = () => {
    const [task,setTask] = useState("")
    const [todos,setTodos] = useState([])


    const handleAdd  = () =>{
        const object = {
            value:task,
            key:uuid()
        }
        setTodos([...todos,object])
        setTask("")
    }

    const removeFunction = (key) =>{
        const newList = todos.filter((e)=>{
            return e.key!==key
        })
        // console.log(new);
        setTodos(newList)
    }

  return (
    <div>
        <h1>Todo App</h1>
        <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder='Enter Your Task'/>
        <button onClick={handleAdd}>Add Todo</button>
        <ul>
           {todos.map((e)=>{
              return <div key={e.value}>
                  <li >{e.value}</li>
                  <button onClick={()=>{removeFunction(e.key)}}>remove</button>
              </div>
           })}
        </ul>
    </div>
  )
}

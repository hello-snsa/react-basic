import React, { useState } from 'react'

export const ConditionalRendring = () => {
    const [flag,setFlag] = useState(false)
    const [flag2,setFalg2] = useState(false)
  return (
    <div>
        <h1>Conditional Rendring</h1>
        {/* {flag && flag2 ? <div>This is true condition</div>:<div>This is fasle condition</div>} */}
        {flag && <div>something</div>}
        <button onClick={()=>{setFlag(!flag)}}>Change Conditon</button>
    </div>
  )
}

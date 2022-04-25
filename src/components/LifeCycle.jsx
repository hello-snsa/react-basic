import React from 'react'

export default function LifeCycle() {
    return (
        <div className='lifeCycle'>

            <h1>LifeCycle</h1>
            <li><abbr title="When an instance of a component is being created and inserted into the DOM">Mounting</abbr></li>
            <li><abbr title="When a component is being Rerender">Update</abbr></li>
            <li><abbr title="When a component is being removed from a DOM">UnMounting</abbr></li>
            <li><abbr title="When there is error while rendering the component">Error</abbr></li>
        </div>
    )
}

import React from 'react'

export default function HooksComp() {
    return (
        <div>

            <h3>Hooks allows us to use react feature  without writing a class component.</h3>
            <p >Allows to reuse stateful components</p>
            <p>Eliminates confusion due to this keyword</p>
            <p>Note: Hooks don't work inside classes</p>
            <h3>Rules of Hooks</h3>
            <p>Only call Hooks at the Top Level</p>
            <p>Don't call hooks inside Loops conditions or nested functions</p>
            <p> Always call hooks from react components and not from any regular js functions</p>


        </div>
    )
}

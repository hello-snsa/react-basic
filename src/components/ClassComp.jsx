import React, { Component } from 'react'

export default class ClassComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>

                <h1>ClassComp</h1>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.addCount}>Add</button>
            </div>
        )
    }
}

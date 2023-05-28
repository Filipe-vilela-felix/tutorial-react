import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        }) 
    }  
 
    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Count: {count}</button>
            </div>
        )
    }
}

export default ClassCounter
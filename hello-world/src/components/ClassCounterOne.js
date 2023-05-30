import React, { Component } from "react";

class ClassCounterOne extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
        console.log("componentDidMount()")
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
        console.log("componentDidUpdate()")
    }
    
    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
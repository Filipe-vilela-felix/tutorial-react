import React, { Component } from 'react'

class Counter extends React.Component {
    
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increment() {
        /*
        this.setState({        
            counter: this.state.counter + 1
        },
        () => {
            console.log('Callbak value', this.state.counter);
        }
        )
        */
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()    
        this.increment()
        this.increment()
    }
    
    render() {
        return(
            <div>
                <div>Counter - {this.state.counter}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {
    
    constructor() {
        super()
        this.state = {
            parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`) // Este é um recurso do es6/es7 que substitui a concatenação
    }
    
    render() {
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
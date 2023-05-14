import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor() {
        super()
        this.state = {
            name: "Vishwas"
        }
    }

    componentDidMount() {
        setInterval(() => {     // Crio uma função que será como um timer, que receberá dois argumentos. O primeiro é uma função de seta e o segundo é um intevalo de tempo em segundos;
            this.setState({
                name: "Vishwas"
            })
        }, 2000)        
    }
    
    render() {
        console.log("***************************Parent Comp render***************************")
        return(
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/*<RegComp name={this.state.name} />*/}
                {/*<PureComp name={this.state.name} />*/}
            </div>
        )
    }
}

export default ParentComp
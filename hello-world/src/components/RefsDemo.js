import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)

        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandle = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>  
                <input type="text" ref={this.inputRef} />
                {/*<input type="text" ref={this.setCbRef} />*/}
                <button onClick={this.clickHandle}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
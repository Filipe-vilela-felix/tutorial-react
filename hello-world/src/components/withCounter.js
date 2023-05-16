import React from "react";

const withCounter = WrapperComponent => {        // Tal função se iguala a: const newComponent = HigherOrderComponent (originalComponent) 
    class withCounter extends React.Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }   
        }
    
        incrementCount = () => {
            this.setState( prevState => {               
                return {count: prevState.count + 1}
            })
        }

        render() {
            return <WrapperComponent 
                        count={this.state.count} incrementCount={this.incrementCount} 
                    />
        }
    }
    return withCounter
}

export default withCounter
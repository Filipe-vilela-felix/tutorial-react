import React, { Component } from 'react'

class UserGreetting extends React.Component {
    
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Hello Vishwas</div>

        {/*return this.state.isLoggedIn ? (<div>Hello Vishwas</div>) : (<div>Welcome Guest</div>)*}

        {/* 
        let message
        if(this.state.isLoggedIn) {
            message = <div>Hello Vishwas</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>
        */}

        {/*
        if(this.state.isLoggedIn) {
            return <div>Welcome Vishwas</div>       
        } else {
            return <div>Welcome Guest</div>
        }
        */}
        
        {/*
        return(
            <div>
                <div>Welcome Vishwas</div>
                <div>Welcome Guest</div>            
            </div>
        )
        */}
    }
}

export default UserGreetting
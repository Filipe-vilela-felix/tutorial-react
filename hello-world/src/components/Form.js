import React, { Component } from 'react'

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            comments: "",
            topic: "react"
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }


    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    hanldeSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, comments, topic} = this.state; 
        return(
            <form onSubmit={this.hanldeSubmit}>
                <div>
                    <label>UserName</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={this.handleUsernameChange} 
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={comments} 
                        onChange={this.handleCommentsChange}>
                    </textarea>
                </div>
                <div>
                    <label value={topic} onChange={this.handleTopicChange}>Topic</label>
                    <select>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
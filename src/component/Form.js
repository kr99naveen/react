import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comment: "",
            topic: 'react',
        }

        // this.emailhandler = this.emailhandler.bind(this);
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    topicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        const { username, comment, topic } = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>username</label>
                    <input placeholder='enter username' type='text' value={username} onChange={this.usernameHandler}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comment} onChange={this.commentHandler}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.topicHandler}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form

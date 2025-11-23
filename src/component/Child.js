import React, { Component } from 'react'

export class Child extends Component {


    checkProps = () => {
        console.log("props ::: ", this.props)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.greetParent("naveen")}>Greet parent</button>
            </div>
        )
    }
}

export default Child

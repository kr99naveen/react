import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parent"
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        console.log(this);
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <Child greetParent={this.greetParent} />
            </div>
        )
    }
}

export default Parent

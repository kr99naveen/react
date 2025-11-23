import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'naveen'
        }

        console.log("constructor Lifecycle A")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps Lifecycle A");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount Lifecycle A")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate Lifecycle A");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate Lifecycle A");
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate Lifecycle A");
    }

    changeState = () => {
        this.setState({
            name: "Naveen"
        })
    }

    render() {
        console.log("render Lifecycle A");

        return (
            <div>
                Lifecycle A
                <button onClick={this.changeState}>Click</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA

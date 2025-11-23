import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'naveen'
        }

        console.log("constructor Lifecycle B")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps Lifecycle B");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount Lifecycle B")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate Lifecycle B");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate Lifecycle B");
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate Lifecycle B");

    }

    render() {
        console.log("render Lifecycle B");

        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB

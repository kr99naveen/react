import React, { Component } from 'react'

export default class RegComp extends Component {
    render() {
        console.log("****** regular component **********", this.props.name);
        return (
            <div>
                Regular Component
            </div>
        )
    }
}

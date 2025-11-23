import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseCount = () => {

        //directly updating the state, will run in batch, and multiple state change can give
        //final inconsistent state value, setting the state value based pn previous state value

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("value updated :: ", this.state.count);
        // });


        //setting through callback, will keep state value consistent

        this.setState((prevSt) => ({
            count: prevSt.count + 1
        }))

        // this will not rerender the componentßßß, for component
        // to be rerender, use setState method, not manual changing the state

        // this.state.count = this.state.count + 1;

        console.log("value fetched in synchronous flow : ", this.state.count);
    }

    increaseFiveTime = () => {
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
    }
    render() {
        return (
            <>
                Count - {this.state.count}
                <div>
                    <button onClick={() => this.increaseFiveTime()}>Increment</button>
                </div>
            </>
        )
    }
}

export default Counter

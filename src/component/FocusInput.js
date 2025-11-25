import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        //Ref gives the parent access to the child component instance,
        //and inside a component, refs give access to its DOM elements.

        //accessing the method of Child, Input class
        //this access has been provided by mentioning ref in Child while calling in parent
        this.componentRef.current.focusInput();

        //OR ::::::::::::::::::::::::::::::::::::::::::::
        //directly accessing the refs in child
        // this.componentRef.current.inputRef.current.focus();
    }


    render() {
        return (
            <div>
                {/* mentioning ref will attach Input to Parent, i,e giving access of Child contents to Parent */}
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput

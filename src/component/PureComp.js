import React, { PureComponent } from 'react'


//pure component use Shallow Comparision for rerendering of the components
//so if there is no change made ACTUALLY, then NO re-rendering happen
//and this adding the optimixation in UI rendering

//Shallow comparision check for Object reference and values both

//it is only for class component
//for functional component we use memo
export default class PureComp extends PureComponent {
    render() {
        console.log("****** pure component **********", this.props.name);
        return (
            <div>
                Pure Component
            </div>
        )
    }
}

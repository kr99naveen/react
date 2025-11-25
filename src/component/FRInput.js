import React from 'react'


//traditional functional component, CAN'T BE USED FOR REFS
// function FRInput() {

//     return (
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }


// forward ref input functional component, An Arrow function,
// the ref here points to the ref of parent
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}></input>
        </div>
    )
})

export default FRInput

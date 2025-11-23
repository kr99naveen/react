import React from 'react'

function Fragment() {

    //extra div for wrapping all child together
    // return (
    //     <div>
    //         <h1>Title</h1>
    //         <p>Description</p>
    //     </div>
    // )

    //to avoid that extra div (node in DOM)
    //use Fragment

    // return (
    //     <React.Fragment>
    //         <h1>Title</h1>
    //         <p>Description</p>
    //     </React.Fragment>
    // )

    //OR::::::::::::
    //BUT in this syntax, you can not add key in React.Fragment tag,
    //key is used by React to identify changes in the DOM
    return (
        <>
            <h1>Title</h1>
            <p>Description</p>
        </>
    )
}

export default Fragment

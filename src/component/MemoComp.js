import React from 'react'


//analogous of pure component in class component
//in functional component, re-rendering only shallow comparision changes
//use Memo
function MemoComp({ name }) {
    console.log("****** memo component **********", name);
    return (
        <div>
            Memo Component
        </div>
    )
}

export default React.memo(MemoComp)

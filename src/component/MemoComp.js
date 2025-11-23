import React from 'react'


//analogous of pure component in class component
//in functional component, re-rendering only shallow comparision changes
//use Memo
function MemoComp({ name }) {
    console.log("****** parent component **********", name);
    return (
        <div>
            Memo Component
        </div>
    )
}

export default React.memo(MemoComp)

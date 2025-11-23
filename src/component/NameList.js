import React from 'react'

function NameList() {
    const names = ['alice', 'bob', 'alpha', 'beta'];
    return (
        <div>
            {
                names.map((name, index) => {
                    //adding a key prop in tag, as react need that key while 
                    //making the virtual DOM and comparision
                    //you may add anything unique
                    // return <h1 key={name.concat((new Date()).getTime())}>{name}</h1>

                    console.log(index)
                    return <h1 key={index}>{name}</h1>

                })
            }
        </div>
    )
}

export default NameList

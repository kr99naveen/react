import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal 1</h1>
            <button>click</button>
        </div>,
        document.getElementById('portal-root')
    )
}

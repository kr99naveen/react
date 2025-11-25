import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <>
            <div>
                <input placeholder='Search Products'></input>
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
            {/* outlet lets the control of child links to routes defined in app.js from parent list of nested routes */}
        </>
    )
}

export default Products

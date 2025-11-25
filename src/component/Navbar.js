import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

    const navLinkStyles = (payload) => {

        console.log("value of isActive received ::: ", payload);
        const { isActive } = payload
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return (
        <div>
            <nav className='primary-nav'>
                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link> */}

                {/* navlink receive an active class that tells the link is currently active or not */}
                {/* and it send it in style functions being passed style by default */}
                <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                <NavLink style={navLinkStyles} to='/about'>About</NavLink>
                <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            </nav>
        </div>
    )
}

export default Navbar

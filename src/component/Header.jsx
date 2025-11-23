import React, { useEffect } from 'react'

const Header = ({ subject }) => {
  useEffect(() => {
    console.log("sidebar hit hrader");
    <p>Sidebar hit</p>
  })
  return (
    <div className='header'>
      <p>This is Header, hit on sidebar {subject} </p>
    </div>
  )
}

export default Header

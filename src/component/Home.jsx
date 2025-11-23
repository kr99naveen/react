import React, { useEffect } from 'react'

const Home = ({ subject }) => {
  useEffect(() => {
    console.log("Sidebar hit home");
    <p>Sidebar hit</p>
  })
  return (
    <div className='home'>
      <p>This is home, hit on side bar {subject}</p>
    </div>
  )
}

export default Home

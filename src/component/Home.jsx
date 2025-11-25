import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({ subject }) => {

  const navigate = useNavigate();
  useEffect(() => {
    console.log("Sidebar hit home");
    <p>Sidebar hit</p>
  })
  return (
    <>
      <div className='home'>
        <p>This is Home, hit on side bar {subject}</p>
      </div>
      <button onClick={() => navigate('order-summary')}>Place Order</button>
    </>
  )
}

export default Home

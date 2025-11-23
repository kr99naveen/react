import React from 'react'

const Sidebar = ({ setSubject }) => {
  return (
    <div>
      < p > This is sidebar</p >
      <div>
        <button className='sidebarBtn' onClick={() => setSubject('Topic 1')}>topic 1</button>
      </div>
      <div>
        <button className='sidebarBtn' onClick={() => setSubject('Topic 2')}>topic 2</button>
      </div>
      <div>
        <button className='sidebarBtn' onClick={() => setSubject('Topic 3')}>topic 3</button>
      </div>
    </div >
  )
}

export default Sidebar

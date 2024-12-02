import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav'>
      <div className="logo"></div>
    
     <div className='router'>
     <span><Link to={'/'}>Home</Link></span>
     <span><Link to={'/carbonfootprint'}>CFP</Link></span>
      </div>
    </div>
  )
}

export default Nav

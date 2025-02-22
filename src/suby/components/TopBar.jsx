import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = ({showRegisterHandler},{showLoginHandler}) => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2> QUICK HOME FOOD</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className='Auth'>
        <div className="loginAuth">
          <span onClick='{showLoginHandler}'>Login</span>
        </div>
        <div className="regAuth">
          <span onClick='{showRegisterHandler}'>Register </span>
        </div>
        </div>
   </section>
  )
}

export default TopBar
import './Header.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MenusItems } from './MenusItems'

import logo from '../../assets/images/icon.png'
import { GoThreeBars } from 'react-icons/go'
import { CgClose } from 'react-icons/cg'

export default () => {
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sideBar)

  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <div className='top-bar-left'>
          <Link to='#' className='side-bar-icon' onClick={showSideBar}>
            {sideBar ? <CgClose /> : <GoThreeBars />}
          </Link>
          <div className={sideBar ? 'side-bar-menu active' : 'side-bar-menu'}>
            <ul>
              {MenusItems.map((item) => {
                return (
                  <li key={item.id}>
                    < item.icon className="side-bar-menu-icon" />
                    <Link id='link' className='top-bar-menu-item animated-text' to={item.src}>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='logo-container'>
            <Link to='/'>
              <img src={logo} alt="Go back" />
            </Link>
            <Link id='link' className='logo-container-title animated-text' to='/'>
              <h2>HULI</h2>
              Gaming Statistics
            </Link>
          </div>
          <div className='top-bar-menu'>
            {MenusItems.map((item) => {
              return (
                <Link key={item.id} id='link' className='top-bar-menu-item animated-text' to={item.src}>
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
        <div className='top-bar-login-menu'>
          <Link id='link' to='/login'>
            <button>Login</button>
          </Link>
          <Link id='link' to='/register'>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </header>
  )
}
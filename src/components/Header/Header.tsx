import './Header.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
            {sideBar ? <CgClose/> : <GoThreeBars/>}
          </Link>
          <div className={sideBar ? 'side-bar-menu active' : 'side-bar-menu'}>
            <ul>
              <li>
                <Link id='link' className='top-bar-menu-item animated-text' to='/teams'>
                  TEAMS
                </Link>
              </li>
              <li>
                <Link id='link' className='top-bar-menu-item animated-text' to='/calendar'>
                  CALENDAR
                </Link>
              </li>
              <li>
                <Link id='link' className='top-bar-menu-item animated-text' to='/watch'>
                  WATCH
                </Link>
              </li>
              <li>
                <Link id='link' className='top-bar-menu-item animated-text' to='/about'>
                  ABOUT US
                </Link>
              </li>
            </ul>
          </div>
          <div className='logo-container'>
            <Link className='logo-container-img' to='/'>
              <img src={logo} alt="Go back" />
            </Link>
            <Link id='link' className='logo-container-title animated-text' to='/'>
              <h2>HULI</h2>
              Gaming Statistics
            </Link>
          </div>
          <div className='top-bar-menu'>
            <Link id='link' className='top-bar-menu-item animated-text' to='/teams'>
              TEAMS
            </Link>
            <Link id='link' className='top-bar-menu-item animated-text' to='/calendar'>
              CALENDAR
            </Link>
            <Link id='link' className='top-bar-menu-item animated-text' to='/watch'>
              WATCH
            </Link>
            <Link id='link' className='top-bar-menu-item animated-text' to='/about'>
              ABOUT US
            </Link>
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
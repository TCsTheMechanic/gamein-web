import './Header.css'

import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/icon.png'

export default () => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <div className='top-bar-menu-left'>
          <div className='logo-container'>
            <Link className='logo-container-img' to='/'>
              <img src={logo} alt="Go back" />
            </Link>
            <Link id='link' className='logo-container-title animated-text' to='/'>
              <h2>HULI</h2>
              Gaming Statistics
            </Link>
          </div>
          <div className='top-bar-menu-items'>
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
        <div className='top-bar-menu-right'>
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
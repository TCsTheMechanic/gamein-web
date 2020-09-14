import './Match-card.css'

import React from 'react'
import { Link } from 'react-router-dom'

import liveIcon from '../../assets/images/match-cards/live-icon.png'
import faceitIcon from '../../assets/images/match-cards/faceit-icon.png'
import furiaIcon from '../../assets/images/match-cards/furia-icon.png'
import liquidIcon from '../../assets/images/match-cards/liquid-icon.png'

export default () => {
  return (
    <Link id='link' className='match-card' to='/'>
      <div className='game-status'>
        <div className='status-container'>
          <img src={liveIcon} alt=""/>
          <span>Live</span>
        </div>
        <div className='championship-container'>
          <img src={faceitIcon} alt=""/>
          <span>FACEIT CS:GO Major</span>
        </div>
      </div>
      <div className='game-info'>
        <div className='first-team-container'>
          <span>Furia</span>
          <img src={furiaIcon} alt=""/>
          <span>2</span>
        </div>
        <div className='match-type'>
          <span>BO3</span>
        </div>
        <div className='second-team-container'>
          <span>0</span>
          <img src={liquidIcon} alt=""/>
          <span>Team Liquid</span>
        </div>
      </div>
    </Link>
  )
}
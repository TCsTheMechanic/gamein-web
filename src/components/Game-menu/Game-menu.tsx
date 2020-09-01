import './Game-menu.css'

import React from 'react'

import GameButton from '../Game-button/Game-button'

import csIcon from '../../assets/images/game-cards/cs-go.png'
import fortniteIcon from '../../assets/images/game-cards/fortnite.png'
import lolIcon from '../../assets/images/game-cards/league-of-legends.png'
import hsIcon from '../../assets/images/game-cards/heartstone.png'
import r6Icon from '../../assets/images/game-cards/rainbow-six.png'
import valorantIcon from '../../assets/images/game-cards/valorant.png'
import apexIcon from '../../assets/images/game-cards/apex-legends.png'

export default () => {
  return (
    <div className='game-menu'>
      <div className='menu-items'>
        <GameButton image={csIcon} description='CS GO' />
        <GameButton image={fortniteIcon} description='Fortnite' />
        <GameButton image={lolIcon} description='League of Legends' />
        <GameButton image={hsIcon} description='Heart Stone' />
        <GameButton image={r6Icon} description='Rainbow Six Siege' />
        <GameButton image={valorantIcon} description='Valorant' />
        <GameButton image={apexIcon} description='Apex Legends' />
      </div>
    </div>
  )
}
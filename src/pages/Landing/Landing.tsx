import './Landing.css'

import React, { FC } from 'react'

import Header from '../../components/Header/Header'
import GameMenu from '../../components/Game-menu/GameMenu'
import MatchCard from '../../components/Match-card/MatchCard'

interface LandingProps {
  background: string
}

const Landing: FC<LandingProps> = (props) => {
  return (
    <div
      id='landing-page'
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <Header />
      <GameMenu />
      <MatchCard />
    </div>
  )
}

export default Landing
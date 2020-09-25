import React from 'react'

import Header from '../../components/Header/Header'
import GameMenu from '../../components/Game-menu/GameMenu'
import MatchCard from '../../components/Match-card/MatchCard'

export default () => {
  return (
    <div id='landing-page'>
      <Header />
      <GameMenu />
      <MatchCard />
    </div>
  )
}
import React from 'react'

import Header from '../../components/Header/Header'
import GameMenu from '../../components/Game-menu/Game-menu'
import MatchCard from '../../components/Match-card/Match-card'

export default () => {
  return (
    <div id='landing-page'>
      <Header />
      <GameMenu />
      <MatchCard />
    </div>
  )
}
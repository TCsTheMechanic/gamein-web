import './GameMenu.css'

import React, { useState }  from 'react'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'

import GameButton from '../Game-button/GameButton'
import { GameMenuItems } from './GameMenuItems'

export default () => {
  const [xPosition, setXPosition] = useState(0)

  // const slideLimit = () => {
  //   const itemsSize = GameMenuItems.length * 200
  //   const windowSize = window.innerWidth
  //   let position = xPosition - 400
  //   if((windowSize - itemsSize) > position){
  //     position = windowSize - itemsSize - 100
  //   }
  //   setXPosition(position)
  // }

  const leftSlide = () => {
    setXPosition(xPosition + 400)
  }

  const rightSlide = () => {
    setXPosition(xPosition - 400)
  }

  return (
  <div className='game-menu'>
    <div className="menu-left" onClick={leftSlide}>
      <TiChevronLeft />
    </div>
    <div className="menu-right"onClick={rightSlide}>
      <TiChevronRight />
    </div>
    <div className='menu-items' style={{marginLeft: xPosition}}>
      {GameMenuItems.map((item) => {
        return(
          <GameButton 
            key={item.id} 
            image={item.img} 
            description={item.description}
          />
        )
      })}
    </div>
  </div>
  )
}
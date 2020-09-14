import './Game-button.css'

import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface GameButtonProps {
  image: string
  description: string
}

const GameButton: FC<GameButtonProps> = (props) => {
  return (
    <Link to={props.description} className='game-button'>
      <img src={props.image} alt={props.description} />
    </Link>
  )
}

export default GameButton
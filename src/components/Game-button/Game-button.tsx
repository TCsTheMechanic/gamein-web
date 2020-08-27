import './Game-button.css'

import React, {FC} from 'react'

interface GameButtonProps {
  image: string
  description: string
}

const GameButton: FC<GameButtonProps> = (props) =>{
  return (
    <a href='.' className='game-button'>
      <img src={props.image} alt={props.description}/>
    </a>
  )
}

export default GameButton
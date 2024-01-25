import React from 'react'
import FishPic from './assets/fishpic.jpeg'

export default function Post() {
  return (
    <div>
        <img className= 'image' src={FishPic} alt="Fish" />
        <h2 className='title'>stuff</h2>
        <p className='text'>Posts and stuff and fish  </p>
    </div>
  )
}

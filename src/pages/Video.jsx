import React from 'react'
import vid from '../video/Промо-ролик кафе _Barbaris_ _ EPIC B-ROLL PIZZA.mp4'
import s from '../pages/Video.module.scss'
const Video = () => {
  return (
    
         <div className={s.vid}>
      <video src={vid} controls autoPlay loop ></video>
      </div>

  )
}

export default Video
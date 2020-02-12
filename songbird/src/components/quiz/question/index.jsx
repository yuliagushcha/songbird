import React from 'react'
import './index.scss'
import AudioPlayer from '../../player'

export default function Question({ answer, isFind }) {
  const renderAnswer = () => {
    return (
      <div className="question">
        <img
          src={isFind ? answer.image : '../../../assets/images/placeholder.jpg'}
          alt={answer.name}
        />
        <div className="question-bar">
          <h3>{isFind ? answer.name : '******'}</h3>
          <AudioPlayer src={answer.audio} />
        </div>
      </div>
    )
  }

  return renderAnswer()
}

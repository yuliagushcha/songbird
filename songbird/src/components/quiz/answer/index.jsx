import React from 'react'
import AudioPlayer from '../../player'
import CONSTANTS from '../../../utils/constants'
import './index.scss'

export default function Answers({ selectAnswer }) {
  const renderAnswers = () => {
    return (
      <div
        className="answer"
        style={
          selectAnswer && {
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${selectAnswer.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }
        }
      >
        {selectAnswer ? (
          <>
            <div className="answer-bar">
              <h4>{selectAnswer.name}</h4>
              <h6>{selectAnswer.species}</h6>
              <AudioPlayer src={selectAnswer.audio} key={selectAnswer.id} />
            </div>
            <p>{selectAnswer.description}</p>
          </>
        ) : (
            <>
              <div className="answer-container">
                <div className="answer-bar">
                  <h6>{CONSTANTS.answerPalceholder}</h6>
                </div>
              </div>
            </>
          )}
      </div>
    )
  }

  return renderAnswers()
}

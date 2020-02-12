/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-else-return */
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { playError, playCorrect } from '../../../utils'

export default function AnswerList({ birds, answer, answers, handleAnswerClick }) {
  const checkAnswer = id => {
    if (answer.id !== id && answers.includes(id)) {
      return 'wrong'
    } else if (answer.id === id && answers.includes(id)) {
      return 'correct'
    }
    return null
  }

  const handleClick = bird => {
    handleAnswerClick(bird)
    if (answer.id !== bird.id) {
      playError()
    } else {
      playCorrect()
    }
  }

  const renderAnswerList = () => {
    return birds.map(bird => (
      <li
        key={bird.id}
        onKeyPress={() => {
          handleClick(bird)
        }}
        onClick={() => {
          handleClick(bird)
        }}
      >
        <span className={`answer-status + ${checkAnswer(bird.id)}`}> </span>
        {bird.name}
      </li>
    ))
  }

  return <ul className="answer-list">{renderAnswerList()}</ul>
}

AnswerList.propTypes = {
  birds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    })
  ),
  answer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }),
  answers: PropTypes.arrayOf(PropTypes.number),
  handleAnswerClick: PropTypes.func.isRequired,
}

AnswerList.defaultProps = {
  birds: [],
  answer: {},
  answers: [],
}

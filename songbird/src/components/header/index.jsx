import React from 'react'
import PropTypes from 'prop-types'
import Level from '../level'
import './index.scss'
import CONSTANTS from '../../utils/constants'

export default function Header({ level, score }) {
  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <img src="../../assets/images/logo.svg" alt="logo" />
        </div>
        <h5>{`${CONSTANTS.score} ${score}`}</h5>
      </div>
      <Level level={level} />
    </div>
  )
}

Header.propTypes = {
  level: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
}

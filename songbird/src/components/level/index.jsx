/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default function Level({ level }) {
  const lev = [
    'Разминка',
    'Хищные',
    'Морские',
    'Соколиные',
    'Аистообразные',
    'Райские'
  ]

  const renderLevels = () => {
    return Array.from({ length: 6 }).map((value, index) => (
      <li key={index} className={level === index ? 'active' : null}>
        {lev[index]}
      </li>
    ))
  }

  return <ul className="menu">{renderLevels()}</ul>
}

Level.propTypes = {
  level: PropTypes.number.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import CONSTANTS from '../../../utils/constants'

export default function Next({ isFind, handleNextLevel }) {
  return (
    <button
      disabled={!isFind}
      className={`next-btn ${isFind && 'enabled'}`}
      onClick={() => handleNextLevel()}
      type="button"
    >
      {CONSTANTS.buttonNext}
    </button>
  )
}

Next.propTypes = {
  isFind: PropTypes.bool,
  handleNextLevel: PropTypes.func.isRequired,
}

Next.defaultProps = {
  isFind: false,
}

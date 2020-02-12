import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { playVictory, stopPlay } from '../../utils'
import './index.scss'
import CONSTANTS from '../../utils/constants'

export class Finish extends Component {
  componentDidMount() {
    const { score } = this.props

    if (score === 30) {
      playVictory()
    }
  }

  componentWillUnmount() {
    stopPlay()
  }

  render() {
    const { handleRestart, score } = this.props
    return (
      <div className="finish">
        <h1>{CONSTANTS.congratulation}</h1>
        <p>{CONSTANTS.tryAgain(score)}</p>
        <hr className="line" />
        <button className="btn-restart" onClick={() => handleRestart()} type="button">
          {CONSTANTS.tryAgainButton}
        </button>
      </div>
    )
  }
}

Finish.propTypes = {
  score: PropTypes.number.isRequired,
  handleRestart: PropTypes.func.isRequired,
}

export default Finish

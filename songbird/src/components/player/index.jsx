/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import { calculateCurrentValue, calculateTotalValue } from '../../utils'
import CONSTANTS from '../../utils/constants'
import './index.scss'

export class AudioPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = { isPlay: false, isLoad: false }

    this.playerRef = React.createRef()
    this.startTimeRef = React.createRef()
    this.endTimeRef = React.createRef()
    this.progressRef = React.createRef()
  }

  initProgressBar = () => {
    const {
      playerRef: { current: player },
      startTimeRef: { current: startTime },
      endTimeRef: { current: endTime },
      progressRef: { current: progress },
    } = this

    if (player && startTime && endTime && progress) {
      const length = player.duration
      const time = player.currentTime
      const totalLength = calculateTotalValue(length)

      endTime.innerHTML = totalLength
      startTime.innerHTML = calculateCurrentValue(time)

      progress.value = player.currentTime / player.duration
      progress.addEventListener('click', this)

      if (player.currentTime === player.duration) {
        this.setState({ isPlay: false })
      }
    }
  }

  play = () => {
    const {
      playerRef: { current: player },
    } = this

    player.play()
    this.setState({ isPlay: true })
  }

  pause = () => {
    const {
      playerRef: { current: player },
    } = this

    player.pause()
    this.setState({ isPlay: false })
  }

  handlePlay = isPlay => {
    if (isPlay) {
      this.pause()
    } else {
      this.play()
    }
  }

  handleEvent(event) {
    const {
      playerRef: { current: player },
      progressRef: { current: progress },
    } = this
    const percent = event.offsetX / progress.offsetWidth
    player.currentTime = percent * player.duration
    progress.value = percent
  }

  render() {
    const { isPlay, isLoad } = this.state
    const { src } = this.props

    return (
      <div>
        {isLoad ? (
          <div className="player">
            <div className="player-controls">
              <div
                className="playback-button"
                onClick={() => {
                  this.handlePlay(isPlay)
                }}
              >
                {isPlay ? <MdPause className="play-btn" /> : <MdPlayArrow className="play-btn" />}
              </div>
              <progress className="seek" ref={this.progressRef} value="0" max="1" />
            </div>
            <div className="player-time">
              <small ref={this.startTimeRef} className="start-time" />
              <small ref={this.endTimeRef} className="end-time" />
            </div>
          </div>
        ) : (
          <span>{CONSTANTS.loading}</span>
        )}

        <audio
          onLoadedMetadata={() => {
            this.setState({ isLoad: true })
          }}
          onTimeUpdate={() => this.initProgressBar()}
          onCanPlay={() => {
            this.initProgressBar()
          }}
          className="player"
          ref={this.playerRef}
          style={{ opacity: 0 }}
        >
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string,
}

AudioPlayer.defaultProps = {
  src: '',
}

export default AudioPlayer

import React from 'react';
import PropTypes from 'prop-types';
import './questionBox.css';
import Player from './player';

export default function Question({ birdName }) {
  return (
    <section className="questionContainer rounded jumbotron">
      <img src="../../assets/images/bird.jpg" alt="Bird" className="anonBird" />
      <div className="playerContainer">
        <h4 className="birdName">{birdName}</h4>
        <Player />
      </div>
    </section>
  )
}

Question.propTypes = {
  birdName: PropTypes.string
}

Question.defaultProps = {
  birdName: '******'
}
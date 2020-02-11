import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import Level from '../level/level';
import './header.css';

export default function Header({ score }) {
  const levels = [
    'Разминка',
    'Хищные',
    'Морские',
    'Соколиные',
    'Аистообразные',
    'Райские'
  ]

  return (
    <header className="header">
      <section className="appInfo">
        <img className="logo" src={logo} alt="Logo" />
        <h5 className="score">
          Score:
          {' '}
          {score}
        </h5>
      </section>
      <Level levels={levels} />
    </header>
  )
}

Header.propTypes = {
  score: PropTypes.number
}

Header.defaultProps = {
  score: 0
}
import React from 'react';
import PropTypes from 'prop-types';
import './level.css';

export default function LevelItems({ level }) {
  return (
    <li className="page-item">
      <a className="page-link" href="/#">
        {level}
      </a>
    </li>
  )
}

LevelItems.propTypes = {
  level: PropTypes.string
}

LevelItems.defaultProps = {
  level: 0
}
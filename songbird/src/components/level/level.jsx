import React from 'react';
import { arrayOf, string } from 'prop-types';
import LevelItems from './levelItems';
import './level.css';

export default function Level(props) {
  return (
    <ul className="pagination">
      {props.levels.map((level, ind) => {
        return <LevelItems key={'key' && ind} level={level} />
      })}
    </ul>
  )
}

Level.propTypes = {
  levels: arrayOf(string)
}

Level.defaultProps = {
  levels: 1
}
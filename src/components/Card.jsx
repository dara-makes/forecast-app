import React from 'react';
import './Card.scss';

/**
 * Card - Displays each days' weather data.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Card = props => {
  let day, temp;
  props.day ? ([day, temp] = [props.day, props.high]) : ([day, temp] = ['Now', props.temp]);

  return (
    <li className="card">
      <i className={`wi wi-yahoo-${props.code}`} />
      <h1 className="card-temp">
        {temp}°
        <span className="card-temp-low">
          {props.low}
        </span>
      </h1>
      <h2 className="card-day">
        {day}
      </h2>
      <p className="card-text">
        {props.text}
      </p>
    </li>
  );
};

export default Card;

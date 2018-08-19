import React from 'react';
import Card from '../components/Card';
import './CardList.scss';

/**
 * CardList - Holds the collection of weather cards.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const CardList = props => {
  return (
    <ul className="card-list">
      {props.data.map((card, index) => <Card key={index} {...card} />)}
    </ul>
  );
};

export default CardList;

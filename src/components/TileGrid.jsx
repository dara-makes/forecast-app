import React, { Component } from 'react';
import { tileData } from '../data/constants';
import Tile from './Tile';
import './TileGrid.scss';

/**
 * Nav Menu - Collection of color tiles
 *
 * @param
 * @public
 */
class TileGrid extends Component {
  state = {
    tileData: tileData
  };

  render() {
    return (
      <div className="tile-grid">
        {this.state.tileData.map((color, index) => {
          return <Tile key={index} colorMapping={color} onClick={this.props.onClick} />;
        })}
      </div>
    );
  }
}

export default TileGrid;

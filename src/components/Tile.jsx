import React, { Component } from 'react';
import './Tile.scss';

/**
 * Nav Menu - Displays each color tile.
 *
 * @param
 * @public
 */
class Tile extends Component {
  handleClick = e => {
    this.props.onClick(e.target.className);
  };

  render() {
    const tileClassList = `tile-item ${this.props.colorMapping}`;
    return <div className={tileClassList} onClick={this.handleClick} />;
  }
}

export default Tile;

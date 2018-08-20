import React from 'react';
import { shallow } from 'enzyme';
import TileGrid from '../components/TileGrid';
import { tileData } from '../data/constants';

describe('TileGrid', () => {
  it('should render tile grid', () => {
    const cardComponent = shallow(<TileGrid />);
    expect(cardComponent).toMatchSnapshot();
  });

  it('should render the correct number of tiles', () => {
    const cardComponent = shallow(<TileGrid {...tileData} />);
    expect(cardComponent.find('Tile').length).toEqual(tileData.length);
  });
});

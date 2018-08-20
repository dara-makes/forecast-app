import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe('Card', () => {
  it('should render card', () => {
    const cardComponent = shallow(<Card />);
    expect(cardComponent).toMatchSnapshot();
  });

  it('should contain weather data', () => {
    const cardComponent = shallow(<Card />);
    expect(cardComponent.find('i').length).toEqual(1);
    expect(cardComponent.find('.card-temp').length).toEqual(1);
    expect(cardComponent.find('.card-day').length).toEqual(1);
    expect(cardComponent.find('.card-text').length).toEqual(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Star from './Star';

describe('<Star /> UI Component', () => {
  it('render default star', () => {
    expect(
      shallow(<Star />)
        .find('div.star')
        .length
    ).toBe(1);
  });

  it('render selected stars', () => {
    expect(
      shallow(<Star selected={true} />)
        .find('div.selected.star')
        .length
    ).toBe(1);
  });

  it('invokes onClick', () => {
    const _click = jest.fn();

    shallow(<Star onClick={_click}/>)
      .find('div.star')
      .simulate('click')

    expect(_click).toBeCalled();
  });
});
// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Content from './index'

describe('Content Component', () => {
  it('should be rendered properly', () => {

    const wrapper = shallow(<Content />);
    expect(wrapper.find('div').length).toEqual(3);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
})


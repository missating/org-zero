// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import App from './index'
import NavBar from '../NavBar'
import Content from '../Content'

describe('App Component', () => {
  it('should be rendered properly', () => {

    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should mount both the Navbar and Content Components when on /', () => {
    const location = {
      pathname: '/',
    };

    const wrapper = shallow(<App location={location} />);

    expect(wrapper.find(NavBar).length).toBe(1);
    expect(wrapper.find(Content).length).toBe(1);
  });
})


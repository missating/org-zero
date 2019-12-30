// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import BorderBox from './index'

describe('BorderBox Component', () => {
  const initialProps = {
    data: [{
      employeeId: "1",
      firstName: "Aiden",
      lastName: "Chung",
      jobTitle: "First Lord of intervieworg",
      officeLocation: "Paris",
      department: "intervieworg",
      managerEmployeeId: null,
      reports: [{}]
    }],
    name: 'Test Department',
    colors: '#00000',
    boxSize: '0.032133676092544985%',
    boxHeight: '51px',
    padding: '51px'
  }
  it('should be rendered properly', () => {

    const wrapper = shallow(<BorderBox {...initialProps} />);
    expect(wrapper.find('article').length).toEqual(1);
    expect(wrapper.find('h1').length).toBe(0)
    expect(wrapper).toMatchSnapshot();
  });
})


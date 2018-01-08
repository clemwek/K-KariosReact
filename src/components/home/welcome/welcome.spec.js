import React from 'react';
import { shallow } from 'enzyme';
import WelcomePage from './welcome';
import expect from 'expect';

describe ('Welcome Page', () => {
  it ('renders without crashing', () => {
    const wrapper = shallow(<WelcomePage />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../pages/HomePage';

describe('HomePage', () => {
  it('has a title of Home', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('.title').text()).toBe("Home");
  });
});

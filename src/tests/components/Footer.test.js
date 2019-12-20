import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('has a footer element', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).toBeTruthy();
  });

  it('has a copyright text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div').text()).toBe('© Copyright 2019 Sakiko. All rights reserved.');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../../pages/AboutPage';

describe('AboutPage', () => {
  it('has a title of About me', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.find('.title').text()).toBe("About me");
  });
});

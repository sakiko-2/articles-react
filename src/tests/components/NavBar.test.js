import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../../components/NavBar';

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Navbar />)));

  it('has a link tag with Home text', () => {
    const link = wrapper
      .find('Link')
      .find({ to: '/' })
      .at(1);

    expect(link.text()).toBe("Home");
  });

  it('has a link tag with About text', () => {
    const link = wrapper
      .find('Link')
      .find({ to: '/about' });

    expect(link.text()).toBe("About");
  });

  it('has a link tag with Articles text', () => {
    const link = wrapper
      .find('Link')
      .find({ to: '/articles-list' });

    expect(link.text()).toBe("Articles");
  });

  it('calls toggleMenu when burger is clicked', () => {
    const toggleMenu = jest.fn();
    const component = mount(
      <Router>
        <Navbar onClick={toggleMenu()} />
      </Router>,
    )
      .find('Link')
      .find('.navbar-burger')
      .at(0)
      .simulate('click');

    expect(toggleMenu).toHaveBeenCalled();
  });
});

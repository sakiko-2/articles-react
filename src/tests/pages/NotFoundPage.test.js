import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../pages/NotFoundPage';

it('renders NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});

it('renders Page Not Found text', () => {
  const wrapper = shallow(<NotFoundPage />);
  const notFound = <h1 className="title">Page Not Found</h1>;
  expect(wrapper.contains(notFound)).toEqual(true);
});

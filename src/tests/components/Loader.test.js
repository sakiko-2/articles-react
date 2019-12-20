import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../components/Loader';

describe('Loader', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Loader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

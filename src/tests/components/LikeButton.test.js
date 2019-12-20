import React from 'react';
import { mount } from 'enzyme';
import LikeButton from '../../components/LikeButton';

describe('LikeButton', () => {
  it('calls likeArticle when clicked', () => {
    const likeArticle = jest.fn();

    const component = mount(<LikeButton onClick={likeArticle()} />);
    component.simulate('click');

    expect(likeArticle).toHaveBeenCalled();
  });
});

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import ArticlesList from '../../components/ArticlesList';
import articleContent from '../../components/article-content';

describe('ArticlesList', () => {
  it('calls scrollToTop when link is clicked', () => {
    const scrollToTop = jest.fn();
    const component = mount(
      <Router>
        <ArticlesList articles={articleContent} onClick={scrollToTop()} />
      </Router>,
    );
    component.simulate('click');

    expect(scrollToTop).toHaveBeenCalled();
  });
});

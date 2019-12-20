import React from 'react';
import { shallow } from 'enzyme';
import ArticlesListPage from '../../pages/ArticlesListPage';

describe('ArticlesListPage', () => {
  it('has a title of Articles', () => {
    const wrapper = shallow(<ArticlesListPage />);
    expect(wrapper.find('.title').text()).toBe("Articles");
  });
});

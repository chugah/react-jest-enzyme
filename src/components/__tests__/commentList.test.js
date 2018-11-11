import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'root';

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('should create one list item per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('should show the text for each comment', () => {
  expect(wrapper.find('li').at(0).render().text()).toContain('Comment 1');
  expect(wrapper.find('li').at(1).render().text()).toContain('Comment 2');
});

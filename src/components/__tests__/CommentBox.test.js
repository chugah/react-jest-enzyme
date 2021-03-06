import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'root';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('should contain a textarea box and two buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('the text area and form submit', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'some text'}
    });
    wrapper.update();
  });

  it('should allow user to enter text in textarea', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('some text');
  });

  it('should allow user to submit form and clear text area', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('some text');
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
})

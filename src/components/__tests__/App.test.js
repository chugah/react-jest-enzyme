import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders comment box component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Comment Box');
  ReactDOM.unmountComponentAtNode(div);
});

it('renders comment list component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Comment List');
  ReactDOM.unmountComponentAtNode(div);
});

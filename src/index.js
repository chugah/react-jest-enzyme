import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App';
import Root from 'root';
import './styles/app.css'; 

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);

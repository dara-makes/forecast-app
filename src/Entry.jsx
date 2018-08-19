import React from 'react';
import { render } from 'react-dom';
import App from './pages/App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./pages/App', () => {
    renderApp();
  });
}

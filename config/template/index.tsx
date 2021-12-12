import React from 'react';
import { render } from 'react-dom';

const App = require(APPINDEX).default;

const init = async () => {
  render(<App />, document.getElementById('root'));
};

init();

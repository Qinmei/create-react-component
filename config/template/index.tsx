import React from 'react';
import { render } from 'react-dom';

const init = async () => {
  const App = await import(process.cwd() + '/src/index.tsx');
  render(<App />, document.getElementById('root'));
};

init();

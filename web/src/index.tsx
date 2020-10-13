import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/landing';
import * as serviceWorker from './serviceWorker';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/index.css';
import App from './containers/App.jsx';
import Data from './assets/data.json';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App 
      info={Data.info}
      data={Data.data}
      overview={Data.overview}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

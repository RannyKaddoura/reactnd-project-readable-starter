import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/css/index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './visual/mojakafica.scss';
import MojaKafica from './mojakafica';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MojaKafica />, document.getElementById('mk'));
serviceWorker.unregister();

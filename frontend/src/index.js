import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

window.Axios = Axios;

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';
import Axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

window.Axios = Axios;

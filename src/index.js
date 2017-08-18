import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRoot from './App';

ReactDOM.render(<ReactRoot/>, document.getElementById('root'));

registerServiceWorker();
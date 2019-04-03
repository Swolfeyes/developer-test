import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/store.js';

import App from './components/App';

require ('./styles.scss');

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

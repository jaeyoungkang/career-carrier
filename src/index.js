import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import CareerStore from './CareerStore'
import App from './App'

const career = new CareerStore();

    ReactDOM.render(
    <Provider career={career}>
        <App />
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
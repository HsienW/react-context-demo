import React from 'react';
import ReactDOM from 'react-dom';
import {ProviderDemo} from './containers/App';
// import {AppChildren} from './containers/AppChildren';
import * as serviceWorker from './common/serviceWorker';
import './style/index.css';

ReactDOM.render(
    <div>
        <ProviderDemo/>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();

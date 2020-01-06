import React from 'react';
import ReactDOM from 'react-dom';
import {CommonLayoutProvider} from './containers/App';
// import {AppChildren} from './containers/AppChildren';
import * as serviceWorker from './common/serviceWorker';
import './style/index.css';

ReactDOM.render(
    <div>
        <CommonLayoutProvider/>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();

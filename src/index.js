import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './containers/Provider';
// import {UseState} from './containers/UseState';
// import {AppChildren} from './containers/AppChildren';
import * as serviceWorker from './common/serviceWorker';
import './style/index.css';

ReactDOM.render(
    <div>
        <Provider/>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();

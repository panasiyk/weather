import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducer from './reducers/allReducers';
import App from './components/app.js'
import City from './components/cityPage';

import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router-dom';
import { ConnectedRouter,routerMiddleware} from 'react-router-redux';
const history = createHistory();
const middleware = routerMiddleware(history);



let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,middleware)));

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/city/:city' component={City}/>
        </div>
    </ConnectedRouter>
</Provider>,
document.getElementById('root'));

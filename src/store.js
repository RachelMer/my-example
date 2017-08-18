import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {loadState, saveState} from "./sessionStorage";
import throttle from 'lodash/throttle';

import navbar from './reducers/navbar';
import session from './reducers/session';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
export const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const persistedState = loadState();

export const store = createStore(
    combineReducers({
        navbar,
        session,
        routing: routerReducer
    }),
    persistedState,
    compose(applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
store.subscribe(throttle( () => {
    saveState(store.getState());
}), 1000);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))



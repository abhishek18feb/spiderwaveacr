import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { watchAuth } from './store/sagas';
import adminReducer from './store/reducers/admin';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const rootReducers = combineReducers({
	admin: adminReducer
});

const store = createStore(
			rootReducers,
			composeEnhancers(applyMiddleware(sagaMiddleware))
		);

sagaMiddleware.run(watchAuth);

ReactDOM.render(
				<Provider store={store}>
					<BrowserRouter>
						<Router>
							<App />
						</Router>
					</BrowserRouter>
				</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

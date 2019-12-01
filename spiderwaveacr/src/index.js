import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { watchAuth,watchSiteSetting, watchCms, watchService,watchUser } from './store/sagas';
import adminReducer from './store/reducers/admin';
import siteSettingReducer from './store/reducers/site_setting';
import cmsReducer from './store/reducers/cms';
import serviceReducer from './store/reducers/service';

const sagaMiddleware = createSagaMiddleware()
//const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const composeEnhancers = compose;
const rootReducers = combineReducers({
	admin: adminReducer,
	siteSetting: siteSettingReducer,
	cms: cmsReducer,
	service: serviceReducer
});

const store = createStore( 
			rootReducers,
			composeEnhancers(applyMiddleware(sagaMiddleware))
		);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchSiteSetting);
sagaMiddleware.run(watchCms);
sagaMiddleware.run(watchService);
sagaMiddleware.run(watchUser);

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

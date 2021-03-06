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
import { watchAuth,watchSiteSetting, watchCms, watchService,watchUser, watchContact, watchServiceRequest } from './store/sagas';
import adminReducer from './store/reducers/admin';
import siteSettingReducer from './store/reducers/site_setting';
import cmsReducer from './store/reducers/cms';
import serviceReducer from './store/reducers/service';
import userReducer from './store/reducers/front/user';
import tosterReducer from './store/reducers/front/toster';
import customerServiceReducer from './store/reducers/front/service';
import frontContactReducer from './store/reducers/front/contact';
import adminMessageReducer from './store/reducers/messages';
import serviceRequestReducer from './store/reducers/front/service_request';
import adminServiceRequestReducer from './store/reducers/service_req';

const sagaMiddleware = createSagaMiddleware()
//const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const composeEnhancers = compose;
const rootReducers = combineReducers({
	admin: adminReducer,
	siteSetting: siteSettingReducer,
	cms: cmsReducer,
	service: serviceReducer,
	user:userReducer,
	toster:tosterReducer,
	customerService:customerServiceReducer,
	frontContact:frontContactReducer,
	message: adminMessageReducer,
	serviceRequest: serviceRequestReducer,
	adminSerReq: adminServiceRequestReducer

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
sagaMiddleware.run(watchContact);
sagaMiddleware.run(watchServiceRequest)

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

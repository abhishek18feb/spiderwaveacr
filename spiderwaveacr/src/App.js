import React from 'react';
//import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Frontend/Home/Home';
import Login from './Backend/Login/Login';
//const Login = React.lazy(() => import('./Backend/Login/Login'));

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      
      <Route
        path="/admin"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={Login} exact />
            {/*<Redirect from={`${url}/`} to={`${url}/login`} />*/}
          </>
        )}
       />
    </div>
  );
}

export default App;

import React, { Suspense} from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Frontend/Home/Home';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
const Login = React.lazy(() => import('./Backend/Login/Login'));
const Logout = React.lazy(() => import('./Backend/Login/Logout/Logout'));
const Dashboard = React.lazy(() => import('./Backend/Dashboard/Dashboard'));

class App extends React.Component{
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
      // let routes = (
      //       <Switch>
      //         <Route path="/auth" component={asyncAuth} />
      //         <Route path="/" exact component={BurgerBuilder} />
      //         <Redirect to="/" />
      //       </Switch>
      //       );
      //   if(this.props.isAuthenticated){
      //     routes =(
      //       <Switch>
      //         <Route path="/checkout" component={asyncCheckout} />
      //         <Route path="/orders" component={asyncOrders} />
      //         <Route path="/logout" component={Logout} />
      //         <Route path="/auth" component={asyncAuth} />
      //         <Route path="/" exact component={BurgerBuilder} />
      //         <Redirect to="/" />
      //       </Switch>
      //      )
      //   }

      return (
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Home} />
            
            <Route
              path="/admin"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Login} exact />
                  {
                    this.props.isAuthenticated?
                    <Route path={`${url}/dashboard`} component={Dashboard} exact />
                    :<Redirect to={`${url}`} />
                  }
                  {
                    this.props.isAuthenticated?
                    <Route path={`${url}/logout`} component={Logout} exact />
                    :<Redirect to={`${url}`} />
                  }
                  {/*<Redirect from={`${url}/`} to={`${url}/login`} />*/}
                  
                </>
              )}
             />
          </Suspense>
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    error: state.admin.error,
    isAuthenticated: state.admin.admintoken !== null,
    authRedirectPath: state.admin.authRedirectPath
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    onTryAutoSignup: ()=>(dispatch(actions.authCheckState()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

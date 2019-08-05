import React, { Suspense} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Frontend/Home/Home';
import Dashboard from './Backend/Dashboard/Dashboard';
import Login from './Backend/Login/Login';
import {connect} from 'react-redux';
import asyncComponent from './hoc/asyncComponent';
import * as actions from './store/actions/index';

const Forgot = asyncComponent(()=>{
                  return import('./Backend/Forgot/Forgot');
                });
const Reset = asyncComponent(()=>{
                return import('./Backend/Reset/Reset');
              }); 
const Logout = asyncComponent(()=>{
                return import('./Backend/Login/Logout/Logout');
              }); 
  
const Setting = asyncComponent(()=>{
                return import('./Backend/Setting/Setting');
              }); 

class App extends React.Component{
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
      console.log(window.location.pathname)
      let routes = (
          <Switch>
            <Route path='/admin/logout' component={Logout} exact />
            <Route path='/admin/reset-password' component={Reset} exact />
            <Route path='/admin/forgot' component={Forgot} exact />
            <Route path="/admin" component={Login} exact />
            <Route path="/" exact component={Home} />
            
          </Switch>
      );
      if(this.props.isAuthenticated){
          console.log('authenticated')
          routes =(
          <Switch>
            <Route path='/admin/dashboard' component={Dashboard} exact />
            <Route path='/admin/settings' component={Setting} exact />
            <Route path='/admin/logout' component={Logout} exact />
            <Route path="/admin" component={Login} exact />
            <Route path="/" exact component={Home} />
          </Switch>
           )
      }
      let redirect='';
      if(!this.props.isAuthenticated && (window.location.pathname).match(/admin/g)){
        redirect=<Redirect to="/admin" />
      }
      return (
        <div className="App">
          {redirect}
          {routes}
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

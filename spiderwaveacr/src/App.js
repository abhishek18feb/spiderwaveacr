import React, { Suspense} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Frontend/Home/Home';
import Dashboard from './Backend/Dashboard/Dashboard';
import Login from './Backend/Login/Login';
import {connect} from 'react-redux';
import asyncComponent from './hoc/asyncComponent';
import * as actions from './store/actions/index';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
const CMSAdd = asyncComponent(()=>{
                return import('./Backend/Cms/Add/Add');
              });
const CMSList = asyncComponent(()=>{
                  return import('./Backend/Cms/List/List');
                })
const CMSEdit = asyncComponent(()=>{
                  return import('./Backend/Cms/Edit/Edit');
                })
const ServiceAdd = asyncComponent(()=>{
                  return import('./Backend/Service/Add/Add');
                })
const ServiceList = asyncComponent(()=>{
                  return import('./Backend/Service/List/List');
                })
const ServiceEdit = asyncComponent(()=>{
                  return import('./Backend/Service/Edit/Edit');
                })

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
            <Route path='/admin/service/add' component={ServiceAdd} exact />
            <Route path='/admin/service/list' component={ServiceList} exact />
            <Route path='/admin/service/edit/:serviceId' component={ServiceEdit} exact />
            <Route path='/admin/cms/add' component={CMSAdd} exact />
            <Route path='/admin/cms/list' component={CMSList} exact />
            <Route path='/admin/cms/edit/:cmsId' component={CMSEdit} exact />
            <Route path='/admin/settings' component={Setting} exact />
            <Route path='/admin/logout' component={Logout} exact />
            <Route path="/admin" component={Login} exact />
            <Route path="/" component={Home} />
          </Switch>
           )
      }
      let redirect='';
      if(!this.props.isAuthenticated && (window.location.pathname).match(/admin/g)){
        redirect=<Redirect to="/admin" />
      }
      return (
        <React.Fragment>
          {redirect}
          {routes}
        </React.Fragment>
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

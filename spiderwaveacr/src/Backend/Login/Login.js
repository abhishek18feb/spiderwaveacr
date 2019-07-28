import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import loginStyle from './Login.module.css';
import Input from '../../component/UI/Input/Input';
import {updateObject, checkValidity} from '../../shared/utility';
import {Danger} from '../../component/UI/Alert/Alert';
import * as actions from '../../store/actions/index';


class Login extends React.Component{
  constructor(props){
    super(props);
  }
  state={
    controls:{
          email: {
                elementType: 'text',
                elementConfig: {
                  type: 'email',
                  placeholder: 'Username'
                },
                value: '',
                validation: {
                  required: true,
                  isEmail: true
                },
                valid:false,
                touched:false,
                label:'Username'
              },
          password: {
                elementType: 'password',
                elementConfig: {
                  type: 'password',
                  placeholder: 'Password'
                },
                value: '',
                validation: {
                  required: true,
                  minLength:6
                },
                valid:false,
                touched:false,
                label:'Password'
              }
    },
    isSignup:true
  }
  componentDidMount(){
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  inputChangedHandler=(event, controlName)=>{
    const updatedControls = updateObject(this.state.controls, {
      [controlName]:updateObject(this.state.controls[controlName],
      {
        value:event.target.value,
        valid: !checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched:true
      }) 
    })
    this.setState({controls: updatedControls});
  }

  submitHandler=(event)=>{
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
    // var interval = setInterval(()=>{
    //     //timesRun += 1;
    //     if(this.props.isAuthenticated){
    //         console.log('Authenticated'+this.props.isAuthenticated)
    //         clearInterval(interval);
    //     }else if(this.props.error){
    //       console.log(this.props.error)
    //       clearInterval(interval);
    //     }
    //     //do whatever here..
    // }, 1000);
  }

  render(){ 
    const formElementArray=[];
    for(let key in this.state.controls){
      formElementArray.push({id:key, config:this.state.controls[key]})
    }
    let form = formElementArray.map(formElement=>(
      <Input key={formElement.id} 
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          label={formElement.config.label}
          changed={(event)=>this.inputChangedHandler(event, formElement.id)}
      />
    ))
    let authRedirect=null;
    if(this.props.isAuthenticated){
      console.log('/admin/dashboard')
      authRedirect = <Redirect to='/admin/dashboard' />
    }
    return(
      <div className={loginStyle.center}>
        {authRedirect}
        {this.props.error?<Danger message={this.props.error} />:''}
        <form className={[loginStyle.modal_content,loginStyle.animate].join(' ')} onSubmit={this.submitHandler}>
          <div className={loginStyle.container}>
            {form}
            <button type="submit">Login</button>
            
          </div>
        </form>
        <div className={loginStyle.container} style={{ backgroundColor:'#f1f1f1' }}>
          <label>
            <span className={loginStyle.psw}>Forgot <Link to="/admin/forgot">password?</Link></span>
          </label>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state=>{
  return {
    error: state.admin.error,
    isAuthenticated: state.admin.admintoken !== null,
    authRedirectPath: state.admin.authRedirectPath
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    onAuth:(email, password, isSignup)=>dispatch(actions.auth(email, password, isSignup))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 



  
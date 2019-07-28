import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import forgotStyle from './Forgot.module.css';
import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';
import {updateObject, checkValidity} from '../../shared/utility';
import {Danger, Success} from '../../component/UI/Alert/Alert';
import * as actions from '../../store/actions/index';


class Login extends React.Component{
  constructor(props){
    super(props);
    console.log('redirect path'+this.props.authRedirectPath)
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
              }
        
    },
    isSignup:true
  }

  componentDidMount(){
    console.log(this.props.authRedirectPath)
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
    this.props.onForgot(this.state.controls.email.value)
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
    return(
      <div className={forgotStyle.center}>
        {this.props.forgotResponseMsg?this.props.forgotResponse?<Success message={this.props.forgotResponseMsg} />:<Danger message={this.props.forgotResponseMsg} />:''}
        <form className={[forgotStyle.modal_content,forgotStyle.animate].join(' ')} onSubmit={this.submitHandler}>
          <div className={forgotStyle.container}>
            {form}
            <Button btnType="submit" btnClass="Default" btnText="Submit" />
          </div>
        </form>
        <div className={forgotStyle.container} style={{ backgroundColor:'#f1f1f1' }}>
          <label>
            <span className={forgotStyle.psw}>Have account <Link to="/admin">Login?</Link></span>
          </label>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state=>{
  return {
    forgotResponse: state.admin.forgotResponse,
    forgotResponseMsg: state.admin.forgotResponseMsg
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    onForgot:(email)=>dispatch(actions.authForgotPwd(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 



  
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import resetStyle from './Reset.module.css';
import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';
import {updateObject, checkValidity} from '../../shared/utility';
import {Danger} from '../../component/UI/Alert/Alert';
import * as actions from '../../store/actions/index';


class Reset extends React.Component{
  constructor(props){
    super(props);
  }
  state={ 
    controls:{
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
              },
          confirm_password: {
                elementType: 'password',
                elementConfig: {
                  type: 'password',
                  placeholder: 'Confirm Password'
                },
                value: '',
                validation: {
                  required: true,
                  minLength:6
                },
                valid:false,
                touched:false,
                label:'Confirm Password'
              }
    },
    isSignup:true,
    formIsValid:false
  }

  componentDidMount(){

  }
  
  inputChangedHandler=(event, controlName)=>{
    const updatedControls = updateObject(this.state.controls, {
      [controlName]:updateObject(this.state.controls[controlName],
      {
        value:event.target.value,
        valid:checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched:true
      }) 
    })
    const updatedResetForm = updateObject(this.state.orderForm,{
      [controlName]:updatedControls
    });
    let formIsValid=true;
    for(let inputIdentifier in updatedResetForm){
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    if(this.state.controls.password.value.length && this.state.controls.confirm_password.value.length && this.state.controls.password.value!==this.state.controls.confirm_password.value){
      formIsValid=true
      document.getElementsByClassName('custom_err').innerHTML='Both Password should be equal'
    }else{
      formIsValid=false
    }
    this.setState({controls: updatedControls, formIsValid: formIsValid});
  }

  submitHandler=(event)=>{
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let resetToken = params.get('reset');
    console.log(resetToken);
    event.preventDefault();
    this.props.onReset(this.state.controls.password.value, this.state.controls.confirm_password.value, resetToken)
  }

  render(){ 
    console.log(this.props.resetResponseMsg);
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
      <div className={resetStyle.center}>

        {this.props.resetResponse?<Redirect to="/admin" />:''}
        {this.props.resetResponseMsg?<Danger message={this.props.resetResponseMsg} />:''}
        <form className={[resetStyle.modal_content,resetStyle.animate].join(' ')} onSubmit={this.submitHandler}>
          <div className={resetStyle.container}>
            {form}
            <Button btnType="submit" btnClass="Default" btnText="Submit" disabled={!this.state.formIsValid} />
          </div>
        </form>
        <div className={resetStyle.container} style={{ backgroundColor:'#f1f1f1' }}>
          <label>
            <span className={resetStyle.psw}>Have account <Link to="/admin">Login?</Link></span>
          </label>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state=>{
  return {
    error: state.admin.error,
    resetResponse: state.admin.resetResponse,
    resetResponseMsg: state.admin.resetResponseMsg 
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    onReset:(password, confirm_password, resetToken)=>dispatch(actions.adminResetPassword(password, confirm_password, resetToken))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset); 



  
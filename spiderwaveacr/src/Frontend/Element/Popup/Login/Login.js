import React, {useState, useEffect} from 'react';
import Tabs from '../../Tabs/Tabs';
import Signup from '../Signup/Signup';
import FormValidator from '../../../../shared/FormValidator';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/front/index';
import Loader from '../../Loader/Loader';

const Login =props=>{
    
    const {show, displayPopup} = props;
    
    useEffect(()=>{
        if(props.userToken){
            displayPopup(false)
        }
    }, [props.userToken, displayPopup])
    const[submitted, setFormSubmit] = useState(false)
    let validator = new FormValidator([
        { 
          field: 'email', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Email is required.' 
        },
        { 
          field: 'email',
          method: 'isEmail', 
          validWhen: true, 
          message: 'That is not a valid email.'
        },
        { 
          field: 'password', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Password is required.'
        }
    ]);

    const handleFormSubmit = event => {
        event.preventDefault();
        //console.log(user);
        validation = validator.validate({...user});
        setUserLogin({...user, validation})
       
        setFormSubmit(true)
        if (validation.isValid) {
            // handle actual form submission here
            props.userLogin(user);

        }
    }
    
    const [user, setUserLogin] = useState({email:'', password:'', validation: validator.valid()});
    let validation = submitted ?                         
                    // if the form has been submitted at least once
                      validator.validate(user) :   
                      // then check validity every time we render
                      user.validation
    
    return (
        <React.Fragment> 
            <div id="id01" className="w3-modal" style={{display: show}}>
                <div className="w3-modal-content w3-card-4">
                <header className="w3-container w3-teal"> 
                    <span  className="w3-button w3-display-topright" 
                        onClick={()=>displayPopup(false)}
                    >×</span>
                    <h2>Login/Signup</h2>
                </header>
                <div className="w3-container">
                    <div className="form-popup" id="myForm">
                        <Tabs>
                            <div label="Login" width="50%">
                                <form className="form-container">
                                    <Loader loader={props.loading} />
                                    <div className={validation.email.isInvalid?'has-error':''}>
                                        <label htmlFor="email"><b>Email</b></label>
                                        <input type="text" placeholder="Enter Email" name="email" value={user.email} onChange={event=>setUserLogin({...user, [event.target.name]:event.target.value})}  />
                                        <span className="help-block">{validation.email.message}</span>
                                    </div>

                                    <div className={validation.email.isInvalid?'has-error':''}>
                                        <label htmlFor="psw"><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={event=>setUserLogin({...user, [event.target.name]:event.target.value})}  />
                                        <span className="help-block">{validation.password.message}</span>
                                    </div>
                                    <button type="submit" onClick={handleFormSubmit} className="btn">Login</button>
                                </form>
                            </div>
                            <div label="Sign Up"  width="50%">
                                <Signup />
                            </div>
                        </Tabs>
                        
                    </div>
                </div>
                
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return {
        userToken: state.user.userToken,
        loading: state.user.loading,
        userId: state.user.userId,
	    error:state.user.error
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        userLogin :(signupData)=>dispatch(actions.userLogin(signupData))
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Login));
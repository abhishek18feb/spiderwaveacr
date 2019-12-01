import React, {useState, useEffect} from 'react';
import FormValidator from '../../../../shared/FormValidator';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/front/index';
import './Signup.css';

const Signup = props=>{
    
    let passwordMatch = (confirmation, state) => (state.password === confirmation)
    const[submitted, setFormSubmit] = useState(false)
    let validator = new FormValidator([
        { 
            field: 'name', 
            method: 'isEmpty', 
            validWhen: false, 
            message: 'Name is required.' 
        },
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
          field: 'mobile', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Pleave provide a phone number.'
        },
        {
          field: 'mobile', 
          method: 'matches',
          args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
          validWhen: true, 
          message: 'That is not a valid phone number.'
        },
        { 
          field: 'password', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Password is required.'
        },
        { 
          field: 'confirmPassword', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Password confirmation is required.'
        },
        { 
          field: 'confirmPassword', 
          method: passwordMatch,   // notice that we are passing a custom function here
          validWhen: true, 
          message: 'Password and password confirmation do not match.'
        }
    ]);

    const [user, setUserReg] = useState({name:'', email:'', mobile:'', password:'', confirmPassword:'', validation: validator.valid()});

    //var submitted = false;
    
    const handleFormSubmit = event => {
        event.preventDefault();
        //console.log(user);
        validation = validator.validate({...user});
        setUserReg({...user, validation})
       
        setFormSubmit(true)
        if (validation.isValid) {
            // handle actual form submission here
            console.log(user);
            props.userSingup(user);
        }
    }
    

    let validation = submitted ?                         
                    // if the form has been submitted at least once
                      validator.validate(user) :   
                      // then check validity every time we render
                      user.validation
 
    return ( 
        <React.Fragment>
            <form  className="form-container">
                {/* <h3>Sign up</h3> */}
                <div className={validation.name.isInvalid && 'has-error'}>
                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" value={user.name} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                    <span className="help-block">{validation.name.message}</span>
                </div>

                <div className={validation.email.isInvalid && 'has-error'}>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" value={user.email} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                    <span className="help-block">{validation.email.message}</span>
                </div>

                <div className={validation.mobile.isInvalid && 'has-error'}>
                    <label htmlFor="email"><b>Mobile</b></label>
                    <input type="text" placeholder="Enter Mobile" name="mobile" value={user.mobile} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                    <span className="help-block">{validation.mobile.message}</span>
                </div>

                <div className={validation.password.isInvalid && 'has-error'}>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                    <span className="help-block">{validation.password.message}</span>
                </div>
                
                <div className={validation.confirmPassword.isInvalid && 'has-error'}>
                    <label htmlFor="psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Enter Confirm Password" name="confirmPassword" value={user.confirmPassword} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                    <span className="help-block">{validation.confirmPassword.message}</span>
                </div>

                <button type="submit" onClick={handleFormSubmit} className="btn">Sign Up</button>
            </form>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return {

    }
}

const mapDispatchToProps = dispatch=>{
    return{
        userSingup :(signupData)=>dispatch(actions.userSingup(signupData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Signup);
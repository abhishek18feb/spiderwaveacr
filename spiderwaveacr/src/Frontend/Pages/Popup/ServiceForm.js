import React, {useState, useEffect} from 'react';
import FormValidator from '../../../shared/FormValidator';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/front/index';
//import Loader from '../../Loader/Loader';
import Loader from '../../Element/Loader/Loader';

const ServiceForm =props=>{
    
    const {show, displayPopup} = props;
    
    
    useEffect(()=>{
        displayPopup(false)
    }, [props.successFlag, displayPopup])

    const[submitted, setFormSubmit] = useState(false)
    let validator = new FormValidator([
        { 
          field: 'name', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Name is required.' 
        },
        { 
          field: 'mobile', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Mobile is required.'
        },
        { 
            field: 'serviceId', 
            method: 'isEmpty', 
            validWhen: false, 
            message: 'Type of Service is required.'
        },
        { 
            field: 'serviceTitle', 
            method: 'isEmpty', 
            validWhen: false, 
            message: 'Type of Service is required.'
        },
        { 
            field: 'address', 
            method: 'isEmpty', 
            validWhen: false, 
            message: 'Address Field is required.'
        },
    ]);

    const handleFormSubmit = event => {
        event.preventDefault();
        validation = validator.validate({...user});
        setUserRequest({...user, validation})
       
        setFormSubmit(true)
        if (validation.isValid) {
            // handle actual form submission here
            props.ServiceRequest(user);

        }
    }
    
    const [user, setUserRequest] = useState({name:'', mobile:'',serviceId:'',serviceTitle:'',address:'', validation: validator.valid()});
    useEffect(()=>{
        if(props.serviceTitle){
            let newProps={serviceId:props.serviceId, serviceTitle:props.serviceTitle}
            setUserRequest({...user, ...newProps})
        }
    }, [props.serviceTitle, setUserRequest])
    
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
                    <h2>Service Request</h2>
                </header>
                <div className="w3-container">
                    <div className="form-popup" id="myForm">
                        <div label="Service Label" width="50%">
                            <form className="form-container">
                                <Loader loader={props.loading} />
                                <div className={validation.name.isInvalid?'has-error':''}>
                                    <label htmlFor="name"><b>Name</b></label>
                                    <input type="text" placeholder="Enter Name" name="name" value={user.name} onChange={event=>setUserRequest({...user, [event.target.name]:event.target.value})}  />
                                    <span className="help-block">{validation.name.message}</span>
                                </div>

                                <div className={validation.mobile.isInvalid?'has-error':''}>
                                    <label htmlFor="mobile"><b>Mobile</b></label>
                                    <input type="text" placeholder="Enter Mobile" name="mobile" value={user.mobile} onChange={event=>setUserRequest({...user, [event.target.name]:event.target.value})}  />
                                    <span className="help-block">{validation.mobile.message}</span>
                                </div>

                                <div className={validation.serviceTitle.isInvalid?'has-error':''}>
                                    <label htmlFor="serviceTitle"><b>Type of Service</b></label>
                                    <input type="text" placeholder="Type of Service" name="serviceTitle" value={user.serviceTitle} onChange={event=>setUserRequest({...user, [event.target.name]:event.target.value})} readOnly={true} />
                                    <span className="help-block">{validation.serviceTitle.message}</span>
                                </div>

                                <div className={validation.address.isInvalid?'has-error':''}>
                                    <label htmlFor="address"><b>Address</b></label>
                                    <input type="text" placeholder="Address" name="address" value={user.address} onChange={event=>setUserRequest({...user, [event.target.name]:event.target.value})}  />
                                    <span className="help-block">{validation.address.message}</span>
                                </div>
                                
                                <button type="submit" onClick={handleFormSubmit} className="btn">Send Request</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <footer className="w3-container w3-teal">
                    <p>Modal Footer</p>
                </footer> */}
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return {
        successFlag: state.serviceRequest.success
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        ServiceRequest :(RequestData)=>dispatch(actions.ServiceRequest(RequestData))
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ServiceForm));
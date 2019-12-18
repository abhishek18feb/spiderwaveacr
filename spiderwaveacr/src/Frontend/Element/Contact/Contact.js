import React, {useState} from 'react';
import FormValidator from '../../../shared/FormValidator';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/front/index';

const Contact = props=>{
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
          field: 'subject', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Subject is required.'
        },
        { 
          field: 'comment', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Comment confirmation is required.'
        }
    ]);
    const [contact, setContact] = useState({name:'', email:"", subject:"", comment:"", validation: validator.valid()});

    const handleFormSubmit = event =>{
        event.preventDefault();
        setFormSubmit(true)
        validation = validator.validate({...contact});
        setContact({...contact, validation})
        
        if (validation.isValid) {
            // handle actual form submission here
            console.log(contact)

        }
    }

    let validation = submitted ?                         
                    // if the form has been submitted at least once
                      validator.validate(contact) :   
                      // then check validity every time we render
                      contact.validation

    return (
        <React.Fragment>
            <div className="w3-container w3-padding-32" id="contact">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
                <p>Lets get in touch and talk about your next project.</p>
                <form>
                    <div className={validation.name.isInvalid?'has-error':''}>
                        <input className="w3-input w3-border" type="text" placeholder="Name" required name="name" onChange={event=>setContact({...contact, [event.target.name]:event.target.value})} />
                        <span className="help-block">{validation.name.message}</span>
                    </div>
                    <div className={validation.email.isInvalid?'has-error':''}>
                        <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="email" onChange={event=>setContact({...contact, [event.target.name]:event.target.value})} />
                        <span className="help-block">{validation.email.message}</span>
                    </div>
                    <div className={validation.subject.isInvalid?'has-error':''}>
                        <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="subject" onChange={event=>setContact({...contact, [event.target.name]:event.target.value})} />
                        <span className="help-block">{validation.subject.message}</span>
                    </div>
                    <div className={validation.comment.isInvalid?'has-error':''}>
                        <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="comment" onChange={event=>setContact({...contact, [event.target.name]:event.target.value})} />
                        <span className="help-block">{validation.comment.message}</span>
                    </div>
                    <button className="w3-button w3-black w3-section" type="submit" onClick={handleFormSubmit}>
                        <i className="fa fa-paper-plane"></i> SEND MESSAGE
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
}


export default Contact;

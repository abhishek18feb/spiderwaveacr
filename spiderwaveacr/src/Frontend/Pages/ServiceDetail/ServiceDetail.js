import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import LayoutNoHeader from '../../Home/LayoutNoHeader';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/front/index';

const ServiceDetails = props =>{
    const handleSubmit = event =>{
        event.preventDefault();
        console.log('Hanljlkjlk') 
    }
    const selectService = serviceId =>{
        console.log(serviceId)
    }

    useEffect(() => {
        props.getServiceData(props.match.params.serviceId)
    }, []);

    useEffect(() => {
        console.log(props.singleServiceResponse);
    }, [props.singleServiceResponse]);

    return (
        <React.Fragment>
            <LayoutNoHeader>
                <div className="w3-container w3-padding-32" id="services">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16" style={{textAlign: "center"}}>{props.singleServiceResponse?props.singleServiceResponse.title:'Loading..........'}</h3>
                    
                   
                    <div className="content" dangerouslySetInnerHTML={{ __html: props.singleServiceResponse?props.singleServiceResponse.content:'Loading..........' }}>
                    </div>
                    <div className="vertical-center card">
                        <button onClick={()=>selectService(props.match.params.serviceId)}>Request</button>
                    </div>
                </div>
                {/* <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>
                    <button type="submit">Submit</button>
                </form> */}
            </LayoutNoHeader>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    singleServiceResponse: state.customerService.singleServiceResponse,
    singleServiceResponseMsg:state.customerService.singleServiceResponseMsg,
});

const mapDispatchToProps = (dispatch)  => ({
    getServiceData: (id)=>dispatch(actions.getServiceDetails(id)),
});

let serviceDetail = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceDetails);

export default reduxForm({
    form: 'ServiceDetails' // a unique name for this form
})(serviceDetail);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import LayoutNoHeader from '../../Home/LayoutNoHeader';
import { connect } from 'react-redux';

const ServiceDetails = props =>{
    const handleSubmit = event =>{
        event.preventDefault();
        console.log('Hanljlkjlk')
    }
    const selectService = serviceId =>{
        console.log(serviceId)
    }
    return (
        <React.Fragment>
            <LayoutNoHeader>
                <div className="w3-container w3-padding-32" id="services">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16" style={{textAlign: "center"}}>Services Name</h3>
                    
                   
                    <div className="content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum turpis mauris, vitae vehicula arcu malesuada a. Vestibulum sollicitudin nisl urna, eget faucibus sapien condimentum a. Ut eget magna id eros fringilla viverra. Sed in leo rhoncus, viverra nibh at, consequat metus. In sodales massa et quam lacinia, non malesuada eros tristique. Nulla euismod urna quis lacus pellentesque sollicitudin. In eget porttitor orci, eu vestibulum felis. Phasellus nec molestie tellus, eget consequat augue. Quisque sed efficitur velit.

                        Donec nec facilisis nulla. In quis dignissim quam, vitae egestas nisl. Quisque nec aliquam sapien, sed tempus massa. Vestibulum eget lacus imperdiet, facilisis tellus sit amet, vehicula arcu. Sed pretium euismod metus vel condimentum. Quisque bibendum, arcu quis lobortis porta, dolor diam imperdiet justo, at auctor elit justo sit amet lacus. Praesent maximus varius ligula, nec aliquet eros congue nec. Donec a laoreet leo. Donec sed lobortis ipsum, in accumsan sapien. Maecenas ornare massa id risus fermentum iaculis. Quisque sed sodales neque. Phasellus risus odio, vehicula id vulputate pellentesque, tincidunt eget purus.
                        </p>
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
    // ...
});

const mapDispatchToProps = (dispatch)  => ({
    // ...
});

let serviceDetail = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceDetails);

export default reduxForm({
    form: 'ServiceDetails' // a unique name for this form
})(serviceDetail);
;
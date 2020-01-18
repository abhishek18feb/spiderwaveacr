import React, {useState, useEffect} from 'react';
import './Service.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/front/index';
import { Link } from "react-router-dom";

const Service = props =>{
    // document.getElementById('left-button').onclick = function () {
    //     scrollLeft(document.getElementById('content'), -300, 1000);   
    // }
    
    // document.getElementById('right-button').onclick = function () {
    //     scrollLeft(document.getElementById('content'), 300, 1000);   
    // }
    const onClickLeft = () => {
        scrollLeft(document.getElementById('content'), -300, 1000);  
    }
    const onClickRight = () => {
        scrollLeft(document.getElementById('content'), 300, 1000); 
    }
         
    function scrollLeft(element, change, duration) { 
        var start = element.scrollLeft,
            currentTime = 0,
            increment = 20;
            
            console.log(start)
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
     
    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    const {customerFetchService} = props;   

    useEffect(()=>{
        customerFetchService()
    },[customerFetchService])

    const selectService = serviceId =>{
        console.log('button hit'+serviceId)
    }
    //console.log(props.customerService)
    let services = <div className='internal'>
                        <div className="vertical-center card">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
    if(props.customerService){
        services=props.customerService.service.map(function(el){
            let serviceId = el._id
            return (
                        <div className='internal' key={el._id}>
                            <div className="vertical-center card">
                                <h3>{el.title}</h3>
                                <Link to={"/servicedetails/"+serviceId} target="_blank" className="service-request">Request</Link>
                                {/* <button  onClick={()=>selectService(el._id)}>Request</button> */}
                                <p></p>
                            </div>
                        </div>
                    )
                });

    }
    return (
        <React.Fragment>
            <div className="w3-container w3-padding-32" id="services">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Services we provide</h3>
                <p>Lets get in touch and talk about your next project.</p>
                <div className="left">
                    <button className="left-button" onClick={onClickLeft}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                </div>
                <div className="center" id="content">
                    {services}
                </div>
                <div className="right">
                    <button className="right-button" onClick={onClickRight}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
	return {
        userToken: state.user.userToken,
        customerService:state.customerService.serviceList
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		customerFetchService:()=>dispatch(actions.customerFetchService())
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (Service);
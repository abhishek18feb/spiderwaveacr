import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import Toster from '../../../Frontend/Element/Toster/Toster';
import './Edit.css'



const  Edit = props => {
	const [windowVar, setWindowVar] = useState({windowHeight:40, windowWidth:20})
	const [serviceReqData, setServiceReqData] = useState({_id:'', name:'', mobile:'', serviceTitle:'', address:'', status:''});
	//console.log(props.match.params)
	useEffect(()=>{
		props.getServiceReqData(props.match.params.serviceReqId, props.admintoken);
	}, []);
	
	useEffect(()=>{
		console.log(props.singleServiceReqResponse);
		if(props.singleServiceReqResponse){
			console.log(props.singleServiceReqResponse)
			setServiceReqData(props.singleServiceReqResponse)
		}
		
	}, [props.singleServiceReqResponse])

	const handleSubmit = event =>{
		event.preventDefault();
		//console.log(messageData);
		props.updateServiceReq(props.match.params.serviceReqId, serviceReqData, props.admintoken);
	}
	let redirect = (props.updateServiceReqResponse)?<Redirect to="/admin/service-req/list" />:''
	return(
		<Layout windowHeight={windowVar.windowHeight} windowWidth={windowVar.windowWidth} activeKey="service-req">
			<Toster />
			{redirect}
			<article style={{minHeight:windowVar.windowHeight}}>
				<h3>View Customer Request</h3>
				<div className="Add">
					<form onSubmit={handleSubmit}>
						<label htmlFor="lname">Name</label>
						<input type="text" name="name" placeholder="Customer Name" 
						value={serviceReqData.name} readOnly />
						
						<label htmlFor="title">Mobile</label>
						<input type="text" name="mobile" placeholder="Customer Mobile" value={serviceReqData.mobile} readOnly />
						
						<label htmlFor="title">Service Title</label><br />
						<textarea name="serviceTitle" value={serviceReqData.serviceTitle} rows="4" cols="100" readOnly />
						<br />
						<label htmlFor="title">Address</label><br />
						<textarea name="address" value={serviceReqData.address} rows="4" cols="100" readOnly />
						<br />
						<label>
							Status
							<select value={serviceReqData.status} name="status" onChange={event=>setServiceReqData({...serviceReqData, [event.target.name]:event.target.value})}>
								<option value="New">New</option>
								<option value="Viewed">Viewed</option>
							</select>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</article>
		</Layout>
	)
}

const mapStateToProps =state=>{
	return {
		admintoken: state.admin.admintoken,
		singleServiceReqResponse:state.adminSerReq.singleServiceReqResponse,
		singleServiceReqResponseMsg:state.adminSerReq.singleServiceReqResponseMsg,
		messageError:state.adminSerReq.messageError,
		updateServiceReqResponse: state.adminSerReq.updateServiceReqResponse,
		updateServiceReqResponseMsg: state.adminSerReq.updateServiceReqResponseMsg 
	};
};

const mapDispatchToProps = dispatch=>{  
	return {
		getServiceReqData: (id, admintoken)=>dispatch(actions.adminGetSingleServiceReq(id, admintoken)),
		updateServiceReq:  (id, formData, adminToken)=>dispatch(actions.updateServiceReq(id, formData, adminToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Edit); 
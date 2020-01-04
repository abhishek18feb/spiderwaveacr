import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import './Edit.css'



const  Edit = props => {
	const [windowVar, setWindowVar] = useState({windowHeight:40, windowWidth:20})
	const [messageData, setMessageData] = useState({_id:'', name:'', email:'', subject:'', comment:'', status:''});
	console.log(props.match.params)
	useEffect(()=>{
		props.getMessageData(props.match.params.messageId, props.admintoken);
	}, []);
	
	useEffect(()=>{
		console.log(props.messageResponse);
		if(props.messageResponse){
			console.log(messageData)
			setMessageData(props.messageResponse)
		}
		
	}, [props.messageResponse])

	const handleSubmit = event =>{
		event.preventDefault();
		console.log(messageData);
	}

	return(
		<Layout windowHeight={windowVar.windowHeight} windowWidth={windowVar.windowWidth} activeKey="messages">
			<article style={{minHeight:windowVar.windowHeight}}>
				<h3>Edit Message</h3>
				<div className="Add">
					<form onSubmit={handleSubmit}>
						<label htmlFor="lname">Name</label>
						<input type="text" name="name" placeholder="Customer Name" 
						value={messageData.name} readOnly />
						
						<label htmlFor="title">Email</label>
						<input type="text" name="email" placeholder="Customer Email" value={messageData.email} readOnly />
						
						<label htmlFor="title">Subject</label><br />
						<textarea name="subject" value={messageData.subject} rows="4" cols="100" readOnly />
						<br />
						<label htmlFor="title">comment</label><br />
						<textarea name="comment" value={messageData.comment} rows="4" cols="100" readOnly />
						<br />
						<label>
							Status
							<select value={messageData.status} name="status" onChange={event=>setMessageData({...messageData, [event.target.name]:event.target.value})}>
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
		messageResponse:state.message.singleMessageResponse,
		messageResponseMsg:state.message.singleMessageResponseMsg,
		messageError:state.message.messageError,
		updateMessageResponse: state.message.updateMessageResponse 
	};
};

const mapDispatchToProps = dispatch=>{ 
	return {
		getMessageData: (id, admintoken)=>dispatch(actions.adminGetSingleMessage(id, admintoken)),
		updateMessage:  (id, formData, adminToken)=>dispatch(actions.updateMessage(id, formData, adminToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Edit);
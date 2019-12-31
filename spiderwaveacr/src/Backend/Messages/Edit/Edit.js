import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import './Edit.css'



const  Edit = props => {
	const [windowVar, setWindowVar] = useState({windowHeight:40, windowWidth:20})
	console.log(props.match.params)
	//useEffect();


	return(
		<Layout windowHeight={windowVar.windowHeight} windowWidth={windowVar.windowWidth} activeKey="messages">
			<article style={{minHeight:windowVar.windowHeight}}>
				<h3>Add New Cms</h3>
				<div className="Add">
					<form>
						<label htmlFor="lname">CMS Name</label>
						<input type="text" id="lname" name="page_name" placeholder="Enter Page Name" />
						
						<label htmlFor="title">CMS Title</label>
						<input type="text" id="title" name="title" placeholder="Enter Cms Title" />
						
						<label htmlFor="title">Meta Keywords</label>
						<input type="text" id="meta_keywords" name="meta_keywords" placeholder="Enter Meta Keywords" />

						<label htmlFor="title">Meta Description</label>
						<input type="text" id="meta_desc" name="meta_desc" placeholder="Enter Meta Description" />

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
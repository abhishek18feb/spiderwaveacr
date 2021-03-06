import React, {Component} from 'react';
import Layout from '../../Layout/Layout';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import Button  from '../../../component/UI/Button/Button';
import Pagination from '../../../component/UI/Pagination/Pagination';
import Toster from '../../../Frontend/Element/Toster/Toster';

import './List.css';


class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			width: 0, 
			height: 0,
			pageNo:1 
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
		this.props.fetchMessageData(1, this.props.admintoken)
		this.updateWindowDimensions();
	  	window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	editMessageHandler=(messageId)=>{
		console.log(messageId);
		this.props.history.push(`/admin/messages/edit/${messageId}`);
	}
	deleteMessageHandler = (messageId) =>{
		this.props.deleteMessageData(messageId, this.props.admintoken)
		this.props.fetchMessageData(this.state.pageNo, this.props.admintoken) 
		//this.pageChangeHandler(this.state.pageNo);
		console.log(messageId);
	}
	pageChangeHandler = pageNo =>{ 
		this.setState({pageNo:pageNo})
		this.props.fetchMessageData(pageNo, this.props.admintoken) 
	}
	render(){
		let listRow=<tr><td colSpan="7">No Record Found</td></tr>
		let totalRecords = 0;
		if(this.props.messageResponse){
			listRow = this.props.messageResponse.messages.map((el, index)=>{
				return (
					<tr key={index}>
						<td>{index+1}</td>
						<td>{el.name}</td>
						<td>{el.email}</td>
						<td>{el.mobile}</td>
						<td>{el.subject}</td>
            			<td>{el.status}</td>
						<td><Button btnType="Button" click={()=>this.editMessageHandler(el._id)} disabled={false} btnText="View" /></td>
						<td><Button btnType="Button" click={()=>this.deleteMessageHandler(el._id)} disabled={false} btnText="Delete" /></td>
					</tr>
				)
			})
			totalRecords = this.props.messageResponse.count;
		}
		return(
			<Layout windowHeight={this.state.height} windowWidth={this.state.width}  activeKey="messages">
				<Toster />
				<article style={{minHeight:this.state.height}}>
			    	<h1>Message List</h1>
					<table>
						<thead>
							<tr key="1">
								<th>S No.</th>
								<th>Name</th>
								<th>Email</th>
								<th>Mobile</th>
								<th>Subject</th>
                				<th>Status</th>
								<th colSpan="2">Action</th>
							</tr>
						</thead>
						<tbody>
							{listRow}
						</tbody>
					</table>
				<Pagination totalRecords = {totalRecords} currentPage={this.state.pageNo} pageChangeHandler={this.pageChangeHandler} />
			  </article>
			</Layout>
		)
	}
}

const mapStateToProps = state =>{
	return {
		admintoken: state.admin.admintoken,
		messageResponse:state.message.messageResponse,
		messageResponseMsg:state.message.messageResponseMsg,
		messageError:state.message.messageError
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		fetchMessageData:(page, adminToken)=>dispatch(actions.adminFetchMessage(page, adminToken)),
		deleteMessageData:(id, adminToken)=>dispatch(actions.admindeleteMessage(id, adminToken))
	};
};

export default connect(mapStateToProps,mapDispatchToProps) (List);
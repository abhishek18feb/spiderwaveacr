import React, {Component} from 'react';
import Layout from '../../Layout/Layout';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import Button  from '../../../component/UI/Button/Button';
import Pagination from '../../../component/UI/Pagination/Pagination';
import './List.css';


class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			width: 0, 
			height: 0 
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
		this.props.fetchMessageData(this.props.admintoken)
		this.updateWindowDimensions();
	  	window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	editMessageHandler=(messageId)=>{
		console.log(messageId)
		this.props.history.push(`/admin/message/edit/${messageId}`);
	}
	pageChangeHandler = pageNo =>{
		console.log(pageNo)
	}
	render(){
		let listRow=<tr><td colSpan="5">No Record Found</td></tr>
		let totalRecords = 0;
		if(this.props.messageResponse){
			console.log(this.props.messageResponse)
			listRow = this.props.messageResponse.messages.map((el, index)=>{
				return (
					<tr key={index}>
						<td>{index+1}</td>
						<td>{el.name}</td>
						<td>{el.email}</td>
						<td>{el.subject}</td>
            <td>{el.status}</td>
						<td><Button btnType="Button" click={()=>this.editMessageHandler(el._id)} disabled={false} btnText="Edit" /></td>
					</tr>
				)
			})
			totalRecords = this.props.messageResponse.count;
		}
		return(
			<Layout windowHeight={this.state.height-160} windowWidth={this.state.width}  activeKey="messages">
				<article style={{minHeight:this.state.height-160}}>
			    	<h1>Message List</h1>
					<table>
						<thead>
							<tr key="1">
								<th>S No.</th>
								<th>Name</th>
								<th>Email</th>
								<th>Subject</th>
                				<th>Status</th>
								<th colSpan="1">Action</th>
							</tr>
						</thead>
						<tbody>
							{listRow}
						</tbody>
					</table>
				<Pagination totalRecords = {totalRecords} currentPage="6" pageChangeHandler={this.pageChangeHandler} />
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
		messageError:state.message.cmsError
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		fetchMessageData:(adminToken)=>dispatch(actions.adminFetchMessage(adminToken))
	};
};

export default connect(mapStateToProps,mapDispatchToProps) (List);
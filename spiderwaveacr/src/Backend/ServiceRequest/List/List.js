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
		this.props.fetchServiceReqData(1, this.props.admintoken)
		this.updateWindowDimensions();
	  	window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	editServiceReqHandler=(serviceReqId)=>{
		console.log(serviceReqId);
		this.props.history.push(`/admin/service-req/edit/${serviceReqId}`);
	}
	deleteServiceReqHandler = (serviceReqId) =>{
		this.props.deleteServiceReqData(serviceReqId, this.props.admintoken)
		this.props.fetchServiceReqData(this.state.pageNo, this.props.admintoken) 
		//this.pageChangeHandler(this.state.pageNo);
		console.log(serviceReqId);
	}
	pageChangeHandler = pageNo =>{ 
		this.setState({pageNo:pageNo})
		this.props.fetchServiceReqData(pageNo, this.props.admintoken) 
	}
	render(){
		let listRow=<tr><td colSpan="10">No Record Found</td></tr>
		let totalRecords = 0;
		if(this.props.serviceReqResponse){
			listRow = this.props.serviceReqResponse.serviceReq.map((el, index)=>{
				return (
						<tr key={index}>
						<td>{index+1}</td>
						<td>{el.name}</td>
						<td>{el.mobile}</td>
						<td>{el.serviceTitle}</td>
						<td>{el.address}</td>
            			<td>{el.status}</td>
						<td><Button btnType="Button" click={()=>this.editServiceReqHandler(el._id)} disabled={false} btnText="View" /></td>
						<td><Button btnType="Button" click={()=>this.deleteServiceReqHandler(el._id)} disabled={false} btnText="Delete" /></td>
					</tr>
				)
			})
			totalRecords = this.props.serviceReqResponse.count;
		}
		return(
			<Layout windowHeight={this.state.height} windowWidth={this.state.width}  activeKey="service-req">
				<Toster />
				<article style={{minHeight:this.state.height}}>
			    	<h1>Customer Request List</h1>
					<table>
						<thead>
							<tr key="1">
								<th>S No.</th>
								<th>Name</th>
								<th>Mobile</th>
								<th>Service Title</th>
								<th>Address</th>
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
		serviceReqResponse:state.adminSerReq.serviceReqResponse,
		serviceReqResponseMsg:state.adminSerReq.serviceReqResponseMsg,
		serviceReqError:state.adminSerReq.serviceReqError
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		fetchServiceReqData:(page, adminToken)=>dispatch(actions.adminFetchServiceReq(page, adminToken)),
		deleteServiceReqData:(id, adminToken)=>dispatch(actions.admindeleteServiceReq(id, adminToken))
	};
};

export default connect(mapStateToProps,mapDispatchToProps) (List);
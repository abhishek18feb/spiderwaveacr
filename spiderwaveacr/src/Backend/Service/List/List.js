 import React, {Component} from 'react';
import Layout from '../../Layout/Layout';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import Button  from '../../../component/UI/Button/Button';
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
		this.props.adminFetchService(this.props.admintoken)
		this.updateWindowDimensions();
	  	window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	editServiceHandler=(serviceId)=>{
		console.log(serviceId) 
		this.props.history.push(`/admin/service/edit/${serviceId}`);
	}

	render(){
		let listRow=<tr><td colSpan="5">No Record Found</td></tr>
		if(this.props.serviceResponse){
			console.log(this.props.serviceResponse)
			listRow = this.props.serviceResponse.service.map((el, index)=>{
				return (
					<tr key={index}>
						<td>{index+1}</td>
						<td>{el.title}</td>
						<td><Button btnType="Button" click={()=>this.editServiceHandler(el._id)} disabled={false} btnText="Edit" /></td>
					</tr>
				)
			})
		}
		return(
			<Layout windowHeight={this.state.height-160} windowWidth={this.state.width}  activeKey="service">
				<article style={{minHeight:this.state.height-160}}>
			    	<h1>Service List</h1>
					<table>
						<thead>
							<tr key="1">
								<th>S No.</th>
								<th>Service Title</th>
								<th colSpan="1">Action</th>
							</tr>
						</thead>
						<tbody>
							{listRow}
							
							
						</tbody>
					</table>
					{/* <div className="pagination">
					  <a href="#">&laquo;</a>
					  <a href="#">1</a>
					  <a href="#" className="active">2</a>
					  <a href="#">3</a>
					  <a href="#">4</a>
					  <a href="#">5</a>
					  <a href="#">6</a>
					  <a href="#">&raquo;</a>
					</div> */}
			  </article>
			</Layout>
		)
	}
}

const mapStateToProps = state =>{
	return {
		admintoken: state.admin.admintoken,
		serviceResponse:state.service.serviceResponse,
		serviceResponseMsg:state.service.serviceResponseMsg,
		cmsError:state.cms.cmsError
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		adminFetchService:(adminToken)=>dispatch(actions.adminFetchService(adminToken))
	};
};

export default connect(mapStateToProps,mapDispatchToProps) (List);
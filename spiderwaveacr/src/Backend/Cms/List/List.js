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
		this.props.fetchCmsData(this.props.admintoken)
		this.updateWindowDimensions();
	  	window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	editCmsHandler=(cmsId)=>{
		console.log(cmsId)
		this.props.history.push(`/admin/cms/edit/${cmsId}`);
	}

	render(){
		let listRow=<tr><td colSpan="5">No Record Found</td></tr>
		if(this.props.cmsResponse){
			console.log(this.props.cmsResponse.cms)
			listRow = this.props.cmsResponse.cms.map((el, index)=>{
				return (
					<tr key={index}>
						<td>{index+1}</td>
						<td>{el.page_slug}</td>
						<td>{el.page_name}</td>
						<td>{el.title}</td>
						<td><Button btnType="Button" click={()=>this.editCmsHandler(el._id)} disabled={false} btnText="Edit" /></td>
					</tr>
				)
			})
		}
		return(
			<Layout windowHeight={this.state.height-160} windowWidth={this.state.width}  activeKey="cms">
				<article style={{minHeight:this.state.height-160}}>
			    	<h1>Cms List</h1>
					<table>
						<thead>
							<tr key="1">
								<th>S No.</th>
								<th>Slug</th>
								<th>Page Name</th>
								<th>Page Title</th>
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
		cmsResponse:state.cms.cmsResponse,
		cmsResponseMsg:state.cms.cmsResponseMsg,
		cmsError:state.cms.cmsError
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		fetchCmsData:(adminToken)=>dispatch(actions.adminFetchCms(adminToken))
	};
};

export default connect(mapStateToProps,mapDispatchToProps) (List);
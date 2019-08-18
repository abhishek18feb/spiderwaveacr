import React, { Component } from 'react';
import Layout from '../../Layout/Layout';
import Input from '../../../component/UI/Input/Input';
import {updateObject, checkValidity} from '../../../shared/utility';
import Button from '../../../component/UI/Button/Button';
import {Danger} from '../../../component/UI/Alert/Alert';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/base64uploadadapter';
import Bus from '../../../shared/Bus';
import { Validation } from '../validate';
import './Edit.css'


class Edit extends Component{
	constructor(props){
		super(props)
		this.state = {
			_id:null,
			controls:{
				page_name:{
					value:'',
					validation:{required:true},
					isValid:false,
					validationMsg:''
				},
				
				title:{
					value:'',
					validation:{required:true},
					isValid:false,
					validationMsg:''
				},
				meta_keywords:{
					value:'',
					validation:{},
					isValid:true,
				},
				meta_desc:{
					value:'',
					validation:{},
					isValid:true,
				},
				content:{
					value:'',
					validation:{},
					isValid:true,
				}
			}, 
			formIsValid:false,
			width: 0, 
			height: 0 
		};

		console.log(this.props.match.params.cmsId);
		this.props.getCmsData(this.props.match.params.cmsId, this.props.admintoken);
		this.handleChange = this.handleChange.bind(this);
  		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	handleChange (evt) {
	    let updatedControls = this.state.controls;
	    let event = evt;
	    updatedControls[evt.target.name].value=evt.target.value;
	    Validation([evt.target.name], evt.target.value, updatedControls[evt.target.name].validation, this.props.admintoken, this.state._id)
	    .then(response=>{
	    	updatedControls[response.name].isValid=response.isValid;
	    	updatedControls[response.name].validationMsg=response.validationMsg;
	    	this.setState({controls:updatedControls})
	    	if(this.state.controls.page_name.isValid && this.state.controls.title.isValid){
	    		this.setState({formIsValid:true})
		    }else{
		    	this.setState({formIsValid:false})
		    }
	    });
	}
	onEditorChange( data ) {
		let updatedControls = this.state.controls;
	    updatedControls.content.value=data;
	    this.setState({controls:updatedControls})
    } 
    submitHandler = (event)=>{
    	event.preventDefault();
    	let formData={};
    	for(let control in this.state.controls){
    		formData[control] = this.state.controls[control].value
    	}
    	console.log(formData)
    	this.props.updateCms(this.state._id, formData, this.props.admintoken);
    }
	render(){
		let redirect = (this.props.updateCmsResponse)?<Redirect to="/admin/cms/list" />:''
		return(
			<Layout windowHeight={this.state.height} windowWidth={this.state.width} activeKey="cms">
				<article style={{minHeight:this.state.height}}>
			    	<h3>Add New Cms</h3>
			    	{redirect}
					<div className="Add">
					  <form onSubmit={this.submitHandler}>
					    <label htmlFor="lname">CMS Name</label>
					    <input type="text" id="lname" name="page_name" value={this.state.controls.page_name.value} onChange={this.handleChange} placeholder="Enter Page Name" />
					    <span className="err">{this.state.controls.page_name.validationMsg}</span><br />
					    
					    <label htmlFor="title">CMS Title</label>
					    <input type="text" id="title" name="title" value={this.state.controls.title.value} onChange={this.handleChange} placeholder="Enter Cms Title" />
					    <span className="err">{this.state.controls.title.validationMsg}</span><br />
					    
					    <label htmlFor="title">Meta Keywords</label>
					    <input type="text" id="meta_keywords" name="meta_keywords" value={this.state.controls.meta_keywords.value} onChange={this.handleChange} placeholder="Enter Meta Keywords" />

					    <label htmlFor="title">Meta Description</label>
					    <input type="text" id="meta_desc" name="meta_desc" value={this.state.controls.meta_desc.value} onChange={this.handleChange} placeholder="Enter Meta Description" />

					    <label htmlFor="country">Description</label>
					    <CKEditor id="editor"
		                    editor={ ClassicEditor }
		                    data={this.state.controls.content.value}
		                    onChange={ ( event, editor ) => {
						            const data = editor.getData();
						            this.onEditorChange(data);
						        }
						    }
		                />
					    <input type="submit" value="Submit" disabled = { !this.state.formIsValid } />
					  </form>
					</div>
			    </article>
			</Layout>
		)
	}
	componentDidUpdate(prevProps, prevState){
		if (this.props.cmsResponse !== prevProps.cmsResponse) {
			console.log('Cms response')
	      	console.log(this.props.cmsResponse) 
			let updatedControls = {
									page_name:{
										value:this.props.cmsResponse.page_name,
										validation:{required:true, unique:true},
										isValid:true,
										validationMsg:''
									},
									
									title:{
										value:this.props.cmsResponse.title,
										validation:{required:true, unique:true},
										isValid:true,
										validationMsg:''
									},
									meta_keywords:{
										value:this.props.cmsResponse.meta_keywords,
										validation:{},
										isValid:true,
									},
									meta_desc:{
										value:this.props.cmsResponse.meta_desc,
										validation:{},
										isValid:true,
									},
									content:{
										value:this.props.cmsResponse.content,
										validation:{},
										isValid:true,
									}
								}
			this.setState({_id:this.props.cmsResponse._id, controls:updatedControls,formIsValid:true})
	  }
	}
}

const mapStateToProps =state=>{
	return {
		admintoken: state.admin.admintoken,
		cmsResponse:state.cms.singleCmsResponse,
		cmsResponseMsg:state.cms.singleCmsResponseMsg,
		cmsError:state.cms.cmsError,
		updateCmsResponse: state.cms.updateCmsResponse
	};
};

const mapDispatchToProps = dispatch=>{
	return {
		getCmsData: (id, admintoken)=>dispatch(actions.adminGetSingleCms(id, admintoken)),
		updateCms:  (id, formData, adminToken)=>dispatch(actions.updateCms(id, formData, adminToken))
	}
}


export default connect(mapStateToProps, mapDispatchToProps) (Edit);
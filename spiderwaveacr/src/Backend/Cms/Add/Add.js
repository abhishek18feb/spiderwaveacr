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
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/base64uploadadapter';
import Bus from '../../../shared/Bus';
import { Validation } from '../validate';
import './Add.css'



class Add extends Component{
	constructor(props){
		super(props)
		this.state = {
			controls:{
				page_name:{
					value:'',
					validation:{required:true, unique:true},
					isValid:false,
					validationMsg:''
				},
				
				title:{
					value:'',
					validation:{required:true, unique:true},
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
	    // check it out: we get the evt.target.name (which will be either "email" or "password")
	    // and use it to target the key on our `state` object with the same name, using bracket syntax
	    let updatedControls = this.state.controls;
	    let event = evt;
	    updatedControls[evt.target.name].value=evt.target.value;
	    Validation([evt.target.name], evt.target.value, updatedControls[evt.target.name].validation, this.props.admintoken)
	    .then(response=>{
	    	updatedControls[response.name].isValid=response.isValid;
	    	updatedControls[response.name].validationMsg=response.validationMsg;
	    	this.setState({controls:updatedControls})
	    	console.log(updatedControls)
	    });
	}
	onEditorChange( data ) {
		let updatedControls = this.state.controls;
	    console.log(updatedControls);
	    updatedControls.content.value=data;
	    console.log({controls:updatedControls})
	    this.setState({controls:updatedControls})
        
    }


	render(){
	
	    
		return (
			<Layout windowHeight={this.state.height} windowWidth={this.state.width} activeKey="cms">
				<article style={{minHeight:this.state.height}}>
			    	<h3>Add New Cms</h3>
					<div className="Add">
					  <form action="/action_page.php">
					    <label htmlFor="lname">CMS Name</label>
					    <input type="text" id="lname" name="page_name" value={this.state.controls.page_name.value} onChange={this.handleChange} placeholder="Enter Page Name" />
					    <span className="err">{this.state.controls.page_name.validationMsg}</span>
					    
					    <label htmlFor="title">CMS Title</label>
					    <input type="text" id="title" name="title" onChange={this.handleChange} placeholder="Enter Cms Title" />
					    <span className="err">{this.state.controls.page_name.validationMsg}</span>
					    
					    <label htmlFor="title">Meta Keywords</label>
					    <input type="text" id="meta_keywords" name="meta_keywords" onChange={this.handleChange} placeholder="Enter Meta Keywords" />

					    <label htmlFor="title">Meta Description</label>
					    <input type="text" id="meta_desc" name="meta_desc" onChange={this.handleChange} placeholder="Enter Meta Description" />

					    <label htmlFor="country">Description</label>
					    <CKEditor id="editor"
		                    editor={ ClassicEditor }
		                    data="<p>Hello from CKEditor 5!</p>"
		                    onInit={ editor => {
		                        // You can store the "editor" and use when it is needed.
		                        console.log( 'Editor is ready to use!', editor );
		                    } }
		                     onChange={ ( event, editor ) => {
					            const data = editor.getData();
					            this.onEditorChange(data);
					            console.log( { event, editor, data } );
					          } }
		                    onBlur={ editor => {
		                        console.log( 'Blur.', editor );
		                    } }
		                    onFocus={ editor => {
		                        console.log( 'Focus.', editor );
		                    } }
		                />
					  
					    <input type="submit" value="Submit" />
					  </form>
					</div>
			    </article>
			</Layout>
		)
	}
}

const mapStateToProps = state=>{
  return {
    error: state.siteSetting.siteSettingError,
    siteSettingResponse: state.siteSetting.siteSettingResponse,
    siteSettingResponseMsg:state.siteSetting.siteSettingResponseMsg,
    isAuthenticated: state.admin.admintoken !== null,
    authRedirectPath: state.admin.authRedirectPath,
    admintoken: state.admin.admintoken,

  }
}

export default connect(mapStateToProps, null)(Add);
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Bus from '../../../shared/Bus';
import './Add.css'

class Add extends Component{
	constructor(props){
		super(props)
		this.state = { width: 0, height: 0 };
  		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	render(){
		return (
			<Layout windowHeight={this.state.height-160} windowWidth={this.state.width}>
				<article style={{minHeight:this.state.height-160}}>
			    	<h3>Using CSS to style an HTML Form</h3>
					<div className="Add">
					  <form action="/action_page.php">
					    <label htmlFor="fname">Slug</label>
					    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

					    <label htmlFor="lname">CMS Name</label>
					    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

					    <label htmlFor="country">Description</label>
					    <CKEditor
		                    editor={ ClassicEditor }
		                    data="<p>Hello from CKEditor 5!</p>"
		                    onInit={ editor => {
		                        // You can store the "editor" and use when it is needed.
		                        console.log( 'Editor is ready to use!', editor );
		                    } }
		                    onChange={ ( event, editor ) => {
		                        const data = editor.getData();
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

export default Add;
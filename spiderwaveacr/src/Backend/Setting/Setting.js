import React, {PureComponent} from 'react';
import Layout from '../Layout/Layout';
import Input from '../../component/UI/Input/Input';
import {updateObject, checkValidity} from '../../shared/utility';
import Button from '../../component/UI/Button/Button';
import {Danger} from '../../component/UI/Alert/Alert';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {Redirect} from 'react-router-dom';

class Setting extends PureComponent{
	constructor(props){
		super(props)
		this.state = { 
						profileLogo:null,
						controls:{
							email:{
				            	elementType: 'text',
				            	elementConfig: {
				            		type: 'email',
				            		placeholder: 'Display Email'
				            	},
				            	value: '',
				            	validation: {
				            		required: true,
				            		isEmail: true
				            	},
				            	valid: false,
				            	touched:false,
				            	label:'Email'
				            },
							phone:{
				            	elementType: 'input',
				            	elementConfig: {
				            		type: 'text',
				            		placeholder: 'Display Phone'
				            	},
				            	value: '',
				            	validation: {
				            		required: true
				            	},
				            	valid: false,
				            	touched:false,
				            	label:'Phone'
				            },
							facebook:{
				            	elementType: 'input',
				            	elementConfig: {
				            		type: 'text',
				            		placeholder: 'Facebook Id'
				            	},
				            	value: '',
				            	validation: {
				            		required: false
				            	},
				            	valid: true,
				            	touched:false,
				            	label:'Facebook'
				            },
							instagram:{
				            	elementType: 'input',
				            	elementConfig: {
				            		type: 'text',
				            		placeholder: 'Instagram Share',
				            	},
				            	value: '',
				            	validation: {
				            		required: false
				            	},
				            	valid: true,
				            	touched:false,
				            	label:'Instagram'
				            },
							twitter:{
				            	elementType: 'input',
				            	elementConfig: {
				            		type: 'text',
				            		placeholder: 'Instagram Share'
				            	},
				            	value: '',
				            	validation: {
				            		required: false
				            	},
				            	valid: true,
				            	touched:false,
				            	label:'Twitter'
				            },
							logo:{
				            	elementType: 'input',
				            	elementConfig: {
				            		type: 'file',
				            		placeholder: 'Instagram Share'
				            	},
				            	value: '',
				            	validation: {
				            		required: false
				            	},
				            	valid: true,
				            	touched:false,
				            	label:'Upload Logo'
				            }
						},
						width: 0, 
						height: 0,
						formIsValid:false,
						imagePreviewUrl: '' 
					};
		this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
	  this.updateWindowDimensions();
	}
	
	updateWindowDimensions() {
	  console.log(window.innerHeight)
	  this.setState({ width: window.innerWidth, height: window.innerHeight });

	}
	inputChangedHandler(event, controlName){
		if(controlName==='logo'){
			let reader = new FileReader();
		    let file = event.target.files[0];
		    reader.onloadend = () => {
		      this.setState({
		        imagePreviewUrl: reader.result
		      });
		    }
		    this.setState({profileLogo:event.target.files[0], height:window.innerHeight+75});
		    reader.readAsDataURL(file)
		}else{
			const updatedControls = updateObject(this.state.controls, {
		      [controlName]:updateObject(this.state.controls[controlName],
		      {
		        value:event.target.value,
		        valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
		        touched:true
		      }) 
		    })
			let formIsValid=true;
			for(let inputIdentifier in updatedControls){
				formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
			}
		    this.setState({controls: updatedControls, formIsValid: formIsValid});
		}
	}

	submitHandler=(event)=>{
	    event.preventDefault();
	    const formData = new FormData();
        formData.append('logo',this.state.profileLogo);
        formData.append('email',this.state.controls.email.value);
        formData.append('phone',this.state.controls.phone.value);
        formData.append('facebook',this.state.controls.facebook.value);
        formData.append('instagram',this.state.controls.instagram.value);
        formData.append('twitter',this.state.controls.twitter.value);
        console.log('Admin Token'+this.props.admintoken)
        this.props.updateSetting(formData, this.props.admintoken);

	}
	render(){
		let imagePreviewUrl = this.state.imagePreviewUrl;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} style={{height:'100px', withd:'100px'}}/>);
		} else {
			$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
		const formElementArray=[];
	    for(let key in this.state.controls){
	      formElementArray.push({id:key, config:this.state.controls[key]})
	    }
	    let form = formElementArray.map(formElement=>(
	      <Input key={formElement.id} 
	          elementType={formElement.config.elementType}
	          elementConfig={formElement.config.elementConfig}
	          value={formElement.config.value}
	          invalid={formElement.config.valid}
	          shouldValidate={formElement.config.validation}
	          touched={formElement.config.touched}
	          label={formElement.config.label}
	          changed={(event)=>this.inputChangedHandler(event, formElement.id)}
	      />
	    ))
	    let redirect=null;
	    if(!this.props.isAuthenticated){
	    	redirect=<Redirect to="/admin/" />
	    }
		return(
			<Layout windowHeight={this.state.height+359} windowWidth={this.state.width}>
				{redirect}
				<article style={{minHeight:this.state.height}}>
			    <h1>Setting</h1>
					<form onSubmit={this.submitHandler}>
						{form}
					  	<div className="imgPreview">
				        	{$imagePreview}
				        </div>
					  	<Button btnType="submit" btnClass="Default" btnText="Submit" disabled={!this.state.formIsValid} />
					</form>
					
			  </article>
			</Layout>
		)
	}
}

const mapStateToProps = state=>{
  return {
    error: state.admin.error,
    isAuthenticated: state.admin.admintoken !== null,
    authRedirectPath: state.admin.authRedirectPath,
    admintoken: state.admin.admintoken,
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    updateSetting:(formData, adminToken)=>dispatch(actions.updateSiteSetting(formData, adminToken))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Setting);
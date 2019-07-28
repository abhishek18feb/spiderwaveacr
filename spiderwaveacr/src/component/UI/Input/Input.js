import React from 'react';
import classes from './Input.module.css';

const Input=(props)=>{
	let inputElement=null;
	let inputClasses=[classes.InputElement];
	let validationError=null;
	if(!props.invalid && props.shouldValidate && props.touched){
		inputClasses.push(classes.invalid);
		validationError = <p className={[classes.ValidationError, 'custom_err'].join(' ')}>Please enter a valid value!</p>;
	}
	switch(props.elementType){
		case('text'):
			inputElement = <input {...props.elementConfig}  className={inputClasses.join(' ')} value={props.value} onChange={props.changed} />
		break;
		case('password'):
			inputElement=<input {...props.elementConfig} className={inputClasses.join(' ')} onChange={props.changed} />
		break;
		case('textarea'):
			inputElement=(<textarea className={inputClasses.join(' ')} onChange={props.changed}>{props.value}</textarea>)
		break;
		case('select'):
			inputElement=(<select className={inputClasses.join(' ')} onChange={props.changed} value={props.value}>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>{option.displayValue}</option>
					))} 			
					</select>)
		break;
		default:
			inputElement = <input {...props.elementConfig} className={inputClasses.join(' ')} value={props.value} onChange={props.changed} />
	}
	return(
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
			{validationError}
		</div>
	)
}

export default Input; 
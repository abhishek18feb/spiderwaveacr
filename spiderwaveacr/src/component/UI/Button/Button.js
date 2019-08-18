import React from 'react';
import * as classes from './Button.module.css';

const Button =(props)=>{
	let btnElement=null;
	switch(props.btnClass){
		case ('Default'):
			btnElement=<button type={props.btnType} className={classes.Default} onClick={props.click} disabled={props.disabled}>{props.btnText}</button>
		break;
		default:
		  	btnElement=<button type={props.btnType} className={classes.Default} onClick={props.click} disabled={props.disabled}>{props.btnText}</button>
	}
	return btnElement;
}

export default Button;
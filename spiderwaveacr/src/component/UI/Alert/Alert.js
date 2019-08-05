import React from 'react';
import classes from './Alert.module.css';

export const Danger = (props) =>{
	return(
		<div className={classes.Danger}>
		   <strong>Danger! </strong>{props.message}
		 </div>
	)
}

export const Success=(props)=>{
	return(
		<div className={classes.Success}>
		   <strong>Success! </strong>{props.message}
		 </div>
	)
}



import React from 'react';
import classes from './Alert.module.css';

export const Danger = (props) =>{

	return(
		<div className={classes.Danger}>
		   <strong>Danger! </strong>{props.message}
		 </div>
	)
}



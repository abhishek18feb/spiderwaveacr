import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Flash from '../../component/UI/Flash/Flash';
import Bus from '../../shared/Bus';
import Layout from '../Layout/Layout';
import './Dashboard.css'

class Dashboard extends Component{
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
		window.flash = (message, type="success") => Bus.emit('flash', ({message, type}))
      	window.flash('Login successfully!', 'success')
		return(
			<Layout windowHeight={this.state.height-160} windowWidth={this.state.width}>
				<article style={{minHeight:this.state.height-160}}>
			    <h1>London</h1>
			    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
			    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
			  </article>
			</Layout>
		)
	}
}

export default Dashboard;
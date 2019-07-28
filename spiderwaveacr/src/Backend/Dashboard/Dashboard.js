import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
		// const { height, width } = this.getWindowDimensions();
		console.log(this.state.height, this.state.width)
		return(
			<div>
				<header>
				  <div className="header">
				    <a href="#default" className="logo">CompanyLogo</a>
				    <div className="header-right">
				      <Link className="active" to="/admin/logout">Logout</Link>
				    </div>
				  </div>
				</header>

				<section>
				  <nav style={{minHeight:this.state.height-160}}>
				    <ul className="sidebar">
				      <li><a href="#" className="active">London</a></li>
				      <li><a href="#">Paris</a></li>
				      <li><a href="#">Tokyo</a></li>
				    </ul>
				  </nav>
				  
				  <article style={{minHeight:this.state.height-160}}>
				    <h1>London</h1>
				    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
				    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
				  </article>
				</section>

				<footer>
				  <p>Copyright@spiderwavesrc</p>
				</footer>
			</div>
		)
	}
}

export default Dashboard;
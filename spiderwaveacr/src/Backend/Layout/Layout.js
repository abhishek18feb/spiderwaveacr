import React from 'react';
import {Link} from 'react-router-dom';
import Flash from '../../component/UI/Flash/Flash';

class Layout extends React.Component{
	render(){
		return (
		<div>
			<Flash />
			<header>
			  <div className="header">
			    <a href="#default" className="logo">CompanyLogo</a>
			    <div className="header-right">
			      <Link className="active" to="/admin/logout">Logout</Link>
			    </div>
			  </div>
			</header>
			<section>
			  <nav style={{minHeight:this.props.windowHeight-160}}>
			    <ul className="sidebar">
			      <li><a href="#" className="active">London</a></li>
			      <li><a href="#">Paris</a></li>
			      <li><a href="#">Tokyo</a></li>
			    </ul>
			  </nav>
			  {this.props.children}
			</section>

			<footer>
			  <p>Copyright@spiderwavesrc</p>
			</footer>
		</div>
	)
	}
	
}

export default Layout;
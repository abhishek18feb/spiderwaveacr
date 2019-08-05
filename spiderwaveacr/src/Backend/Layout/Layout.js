import React from 'react';
import {Link} from 'react-router-dom';
import Flash from '../../component/UI/Flash/Flash';
import * as styles from './Layout.module.css';
import {NavLink} from 'react-router-dom';

class Layout extends React.Component{
	render(){
		return (
		<div>
			<Flash />
			<header>
			  <div className={styles.header}>
			    <a href="#default" className={styles.logo}>CompanyLogo</a>
			    <div className={styles.header_right}>
			      <Link className={styles.active} to="/admin/logout">Logout</Link>
			    </div>
			  </div>
			</header>
			<section>
			  <nav style={{minHeight:this.props.windowHeight}}>
			    <ul className={styles.sidebar}>
			      <li><NavLink to='/admin/dashboard/' activeClassName={styles.active}>Dashboard</NavLink></li>
			      <li><NavLink to='/admin/settings/' activeClassName={styles.active}>Setting</NavLink></li>
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
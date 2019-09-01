import React from 'react';
import {Link} from 'react-router-dom';
import Flash from '../../component/UI/Flash/Flash';
import * as styles from './Layout.module.css';
import {NavLink} from 'react-router-dom';

class Layout extends React.PureComponent{
	constructor(props){
		super(props);
		this.state={activeKey:undefined}
	}

	toggleList(key){
		console.log(key);
		this.setState({activeKey:key})
	}
	componentDidMount(){
		console.log(this.state.activeKey);
	}

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
			      	<ul className={styles.menu}>
						<li key="cms" 
							className={((this.state.activeKey==="cms")||(this.props.activeKey==="cms"))?styles.active_sub_menu:styles.inactive_sub_menu}
							onClick={(e)=>this.toggleList("cms")} >
							<Link to='/admin/cms/list'>Cms</Link>
							<ul className="sub-menu">
					      		<li><NavLink to='/admin/cms/list' activeClassName={styles.active}>List</NavLink></li>
					      		<li><NavLink to='/admin/cms/add/' activeClassName={styles.active}>Add</NavLink></li>
							</ul>
						</li>
					</ul>
					<ul className={styles.menu}>
						<li key="service" 
							className={((this.state.activeKey==="service")||(this.props.activeKey==="service"))?styles.active_sub_menu:styles.inactive_sub_menu}
							onClick={(e)=>this.toggleList("service")} >
							<Link to='/admin/service/list'>Service</Link>
							<ul className="sub-menu">
					      		<li><NavLink to='/admin/service/list' activeClassName={styles.active}>List</NavLink></li>
					      		<li><NavLink to='/admin/service/add/' activeClassName={styles.active}>Add</NavLink></li>
							</ul>
						</li>
					</ul>
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
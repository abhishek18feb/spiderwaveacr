import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './HeaderMenu.css';
import Login from '../Popup/Login/Login';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/front/index';

const HeaderMenu = props => {
	const [showLoginPopup, displayPopup]=useState("none");
	let userName = localStorage.getItem('customerName')?localStorage.getItem('customerName').split(' ')[0]:null;

    return (
        <React.Fragment>
			<div className="w3-top">
				<div className="w3-bar w3-white w3-wide w3-padding w3-card">
					<a href="#home" className="w3-bar-item w3-button"><b>Spider</b> Waveacr</a>
					
					<div className="w3-right w3-hide-small">
						{
							(props.userToken)?
							(<div className="w3-bar-item w3-button dropdown">
								Hi {userName}
								<div className="dropdown-content">
									<a href={void(0)} className="w3-bar-item w3-button"
									onClick={event=>props.onTryLogout()}
									>Logout</a>
								</div>
							</div>)
							:
							<a href={void(0)} className="w3-bar-item w3-button" onClick={()=>displayPopup("block")}>Login/Signup</a>
						}
						
						<a href="#contact" className="w3-bar-item w3-button">Contact Us</a>
                        <a href="#services" className="w3-bar-item w3-button">Services</a>
                        <a href="#address" className="w3-bar-item w3-button">Address</a>
						{/* <Link to="/admin">Admin Panle link</Link>  */}
					</div>
				</div>
			</div>
			<Login show={showLoginPopup} displayPopup={displayPopup} />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
	return {
		userToken:state.user.userToken,
	}
}

const mapDispatchToProps = dispatchEvent => {
	return {
		onTryLogout: ()=>dispatchEvent(actions.logout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderMenu)
import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Login from '../Popup/Login/Login';

const HeaderMenu = props => {
	const [showLoginPopup, displayPopup]=useState("none");

    return (
        <React.Fragment>
			
            <div className="w3-top">
				<div className="w3-bar w3-white w3-wide w3-padding w3-card">
					<a href="#home" className="w3-bar-item w3-button"><b>Spider</b> Waveacr</a>
					
					<div className="w3-right w3-hide-small">
						<a href="#projects" className="w3-bar-item w3-button" onClick={()=>displayPopup("block")}>Login/Signup</a>
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

export default HeaderMenu
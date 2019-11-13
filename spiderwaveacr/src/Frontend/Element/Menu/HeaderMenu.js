import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const HeaderMenu = props => {
    return (
        <React.Fragment>
            <div className="w3-top">
				<div className="w3-bar w3-white w3-wide w3-padding w3-card">
					<a href="#home" className="w3-bar-item w3-button"><b>Spider</b> Waveacr</a>
					
					<div className="w3-right w3-hide-small">
						<a href="#projects" className="w3-bar-item w3-button">Login/Signup</a>
						<a href="#contact" className="w3-bar-item w3-button">Contact Us</a>
                        <a href="#services" className="w3-bar-item w3-button">Services</a>
                        <a href="#address" className="w3-bar-item w3-button">Address</a>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

export default HeaderMenu
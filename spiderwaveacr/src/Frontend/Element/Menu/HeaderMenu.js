import React from 'react';

const HeaderMenu = props => {
    return (
        <React.Fragment>
            <div class="w3-top">
				<div class="w3-bar w3-white w3-wide w3-padding w3-card">
					<a href="#home" class="w3-bar-item w3-button"><b>Spider</b> Waveacr</a>
					
					<div class="w3-right w3-hide-small">
						<a href="#projects" class="w3-bar-item w3-button">Login/Signup</a>
						<a href="#contact" class="w3-bar-item w3-button">Contact Us</a>
                        <a href="#about" class="w3-bar-item w3-button">Services</a>
                        <a href="#address" class="w3-bar-item w3-button">Address</a>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

export default HeaderMenu
import React from 'react';
import './Footer.css';

const Footer =props=>{
    return (
        <React.Fragment>
            <footer className="w3-center w3-black w3-padding-64 w3-opacity">
				<div className="w3-xlarge w3-section">
					<a href="#"><i className="fab fa-facebook w3-hover-opacity"></i></a>
					<a href="#"><i className="fab fa-instagram w3-hover-opacity"></i></a>
					<a href="#"><i className="fab fa-snapchat w3-hover-opacity"></i></a>
					<a href="#"><i className="fab fa-pinterest-p w3-hover-opacity"></i></a>
					<a href="#"><i className="fab fa-twitter w3-hover-opacity"></i></a>
					<a href="#"><i className="fab fa-linkedin w3-hover-opacity"></i></a>
					<p>Powered by <a href="https://www.appingenious.com/" title="W3.CSS" target="_blank" className="w3-hover-text-green">Appingenious</a></p>
				</div>
			</footer>
        </React.Fragment>
    )
}

export default Footer;
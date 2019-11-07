import React from 'react';

const Footer =props=>{
    return (
        <React.Fragment>
            <footer className="w3-center w3-black w3-padding-16">
				<i className="fa fa-facebook-official w3-hover-opacity"></i>
				<i className="fa fa-instagram w3-hover-opacity"></i>
				<i className="fa fa-snapchat w3-hover-opacity"></i>
				<i className="fa fa-pinterest-p w3-hover-opacity"></i>
				<i className="fa fa-twitter w3-hover-opacity"></i>
				<i className="fa fa-linkedin w3-hover-opacity"></i>
				<p>Powered by <a href="https://www.appingenious.com/" title="W3.CSS" target="_blank" className="w3-hover-text-green">Appingenious</a></p>
			</footer>
        </React.Fragment>
    )
}

export default Footer;
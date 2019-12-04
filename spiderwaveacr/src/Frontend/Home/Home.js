import React from 'react';
import Header from '../Element/Header/Header';
import HeaderMenu from '../Element/Menu/HeaderMenu';
import Contact from '../Element/Contact/Contact';
import Address from '../Element/Address/Address';
import Footer from '../Element/Footer/Footer';
import Service from '../Component/Service/Service';
import Toster from '../Element/Toster/Toster';
import './Home.css'


function Home(props){
	return(
		<React.Fragment>
			<Toster />
			<Header />
			<HeaderMenu />
			<div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>
				<Service />
				<Contact />
				<Address />
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default Home;


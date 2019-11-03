import React from 'react';
import { Container, Row,Navbar } from 'react-bootstrap';
const Header = props =>{
    return (
        <header>
            <div className="top">
                <Container>

                    <Row>
                        <div className="span6">
                            <ul className="topmenu">
                                <li><a href="#">Home</a> &#47;</li>
                                <li><a href="#">Terms</a> &#47;</li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="span6">
                            <ul className="social-network">
                                <li><a href="#" data-placement="bottom" title="Facebook"><i className="icon-circled icon-bglight icon-facebook"></i></a></li>
                                <li><a href="#" data-placement="bottom" title="Twitter"><i className="icon-circled icon-bglight icon-twitter"></i></a></li>
                                <li><a href="#" data-placement="bottom" title="Linkedin"><i className="icon-circled icon-linkedin icon-bglight"></i></a></li>
                                <li><a href="#" data-placement="bottom" title="Pinterest"><i className="icon-circled icon-pinterest  icon-bglight"></i></a></li>
                                <li><a href="#" data-placement="bottom" title="Google +"><i className="icon-circled icon-google-plus icon-bglight"></i></a></li>
                            </ul>
                        </div>
                    </Row>

                </Container>
            </div>
            <div className="container">
                <div className="row nomargin">
                    <div className="span4">
                        <div className="logo">
                            <h1><a href="index.html"><i className="icon-tint"></i> Remember</a></h1>
                        </div>
                    </div>
                    <div className="span8">
                        <div className="navbar navbar-static-top">
                            <div className="navigation">
                                <nav>
                                    <ul className="nav topnav">
                                        <li className="active">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Features <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="components.html">Components</a></li>
                                                <li><a href="icons.html">Icons</a></li>
                                                <li><a href="icon-variations.html">Icon variations</a></li>

                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Pages <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="about.html">About us</a></li>
                                                <li><a href="pricingbox.html">Pricing boxes</a></li>
                                                <li><a href="404.html">404</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Portfolio <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="portfolio-2cols.html">Portfolio 2 columns</a></li>
                                                <li><a href="portfolio-3cols.html">Portfolio 3 columns</a></li>
                                                <li><a href="portfolio-4cols.html">Portfolio 4 columns</a></li>
                                                <li><a href="portfolio-detail.html">Portfolio detail</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Blog <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                                <li><a href="post-left-sidebar.html">Post left sidebar</a></li>
                                                <li><a href="post-right-sidebar.html">Post right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
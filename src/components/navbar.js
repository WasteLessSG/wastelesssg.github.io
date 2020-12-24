import logo from './../assets/logo.png';
import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const NavigationBar = () => {
    return  (
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  sticky="top" >
                    <Nav className="mr-auto">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width={30} height={30} alt = ""  className="d-inline-block mr-1"/>
                              <span>WasteLess</span>
                        </a>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to='/aboutus' className="">About Us</Link>
                            <Link to="/team">Our Team</Link>
                            <NavDropdown title="Our Solution"  id="collapsible-nav-dropdown">
                                {/*@TODO change to a scroll to id*/}
                                <Link to="/solution">App </Link>
                                <Link to="/solution">Hardware</Link>

                            </NavDropdown>
                            <Link to="/contact">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    );
}

export default NavigationBar;
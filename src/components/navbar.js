import logo from './../assets/logo.png';
import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';


const NavigationBar = () => {
    return  (
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  sticky="top">
                    <Nav className="mr-auto">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width={30} height={30} alt = ""  className="d-inline-block mr-1"/>
                              <span>WasteLess</span>
                        </a>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            <Nav.Link href="/team">Our Team</Nav.Link>
                            <NavDropdown title="Our Solution"  href="/solution" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/solution">App</NavDropdown.Item>
                                <NavDropdown.Item href="/solution">Hardware</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    );
}

export default NavigationBar;
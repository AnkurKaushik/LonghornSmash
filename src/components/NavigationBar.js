import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/LS_Logo.png'

const Styles = styled.div`
    .navbar{
        background-color: #000;
        font-family: "HKGrotesk", Arial, sans-serif;
        font-size: 120%;
        padding: 1.5em
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover{
            color: #cd6c3c;
            transition: color 0.2s
        }
    }
`;

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Styles>
                <Navbar expand="lg" sticky="top" variant="dark">
                    <Navbar.Brand href="/">
                        <img 
                            alt=""
                            src={logo}
                            width="40"
                            height="30"
                            className="d-inline-block align-top">
                        </img>{' '}
                        Longhorn Smash
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/aboutus">About Us</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="officers">Officers</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/pr">Rankings</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}
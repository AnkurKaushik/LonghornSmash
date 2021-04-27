import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/LS_Logo.png'
import "../css/NavigationBar.css"

export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            navClass: ""
        }
    }

    componentDidMount() {
        window.onscroll = () => {
          if(window.pageYOffset !== 0) {
            this.setState({
              navClass: "scrolled"
            })
          } else {
            this.setState({
              navClass: ""
            })
          }
        };
      }
    
      componentWillUnmount() {
        window.onscroll = null;
      }
    
    render() {
        return (
            <Navbar className={this.state.navClass} expand="lg" sticky="top" variant="light">
                <Navbar.Brand href="/">
                    <img alt=""
                        src={logo}
                        width="40"
                        height="30"
                        className="d-inline-block align-top">
                    </img>{' '}
                    Longhorn Smash
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={window.location.pathname} className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/tournaments">Tournaments</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/officers">Officers</Nav.Link>
                        <Nav.Link href="/pr">PR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
import React from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {navigationLinks} from '../../helpers/navigationLinks'


function createLinks() {
    return navigationLinks.map((link, idx) => {
        return (
            <Nav.Link key={idx} href={link.ref}>{link.name}</Nav.Link>
        );
    })
}
function NavigationBar() {
    return (
        <div id='home'>
            <Navbar className="navigation__container" expand="lg">
                <Navbar.Brand style={{marginLeft: '1rem'}} href='#home'>Shree Hari</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}}>
                    <Nav className="links" style={{margin: '0 1rem'}}>
                        {createLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar

import React from 'react';
import Snippet from './Snippet.png';
import home from './home.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import tele from './tele.png';
import footer from './footer.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
function Home () {
  return (
    <div className='Snippet'>
      <img src={Snippet} style={{width:'100%'}}/>
      <Navbar bg="light" expand="lg">
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">WHAT WE DO</Nav.Link>
            <Nav.Link href="#">ALL CAMPAIGN</Nav.Link>
            <Nav.Link href="#">PROJECT</Nav.Link>
            <Nav.Link href="#">VOLUNTEERS</Nav.Link>
            <Nav.Link href="#">LEARNINGS</Nav.Link>
            <NavDropdown title="REGISTER" id="register-dropdown">
            <NavDropdown.Item href="https://forms.gle/13mCom2jDYK83ZRLA">STUDENT</NavDropdown.Item>
            <NavDropdown.Item href="https://forms.gle/y68TqYbiJ1QCufKLA">VOLUNTEERS</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="CONNECT" id="connect-dropdown">
          <div className="telegram-link">
                <img src={tele} alt="Telegram" style={{ width: '15%' }} className="tele-logo" />
                <a href="https://web.telegram.org/k/#@Lamp_info_bot" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </div>
          </NavDropdown>
          <Nav.Link href="#">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <img src={home} style={{width:'119.3%'}}/>
      <img src={footer} style={{width:'100%'}}/>
    </div>
   
  );
}

export default Home;

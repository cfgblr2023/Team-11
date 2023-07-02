import React, { useEffect, useState } from 'react';
import Snippet from '../Home/Snippet.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import tele from '../Home/tele.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './display.css';

const Display = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/courses',{mode:'cors'})
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error(error));
  }, []);

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
    <div className="d-flex justify-content-center align-items-center h-100">
    <div>
      <h1>COURSES:</h1>
      <div className="card-deck">
        {courses.map(course => (
          <div className="card mb-4" key={course.name}>
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">Description: {course.description}</p>
              <a href={course.link} className="btn btn-primary">View Course</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
  );
};
//Display.use(cors({ origin: true }));
export default Display;
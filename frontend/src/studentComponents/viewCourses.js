import React from 'react';
import myImage from './bg.jpg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import tele from './tele.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import myProfile from './Profileicon.png';


class ViewCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCourses: false,
      courses: [
        'Course 1',
        'Course 2',
        'Course 3',
        'Course 4',
        'Course 5',
        'Course 6'
      ]
    };
  }

  handleViewCourses = () => {
    this.setState({ showCourses: true });
  };

  handleRegisterCourse = () => {
    console.log('Register for New Course button clicked!');
  };

  render() {
    const { showCourses, courses } = this.state;

    return (
        <div >
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
            <NavDropdown.Item href="https://forms.gle/vfUK7pAMKwke1xuW9">VOLUNTEERS</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="CONNECT" id="connect-dropdown">
          <div className="telegram-link">
                {/* <img src={tele} alt="Telegram" style={{ width: '15%' }} className="tele-logo" /> */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </div>
          </NavDropdown>
          
            <Nav.Link href="#">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
     <div>
        <img src={myProfile} style={{top:'12%',position:'absolute',right:'5%',display:'flex',flexDirection:'column',width:'40px'} }></img>
     </div>

     <div>
        <h2 style={{position:'absolute',right:'10%',top:'12%',color:'black'}}>Welcome, Aaditya Goel!</h2>
     </div>

      <div>
        <img src={myImage} style={{ width: '100%', height: 'auto'}}></img>

        <div style={{ position: 'absolute',top:'5px',right: '33%', display: 'flex', flexDirection: 'column',borderRadius: '50%', border: 'none',opacity:'0.9'}}>
          <button onClick={this.handleViewCourses} className="fancy"
          style={{position:'absolute',color:'rgb(255, 230, 243)',backgroundColor:'black',width:'300px',height:'200px',top:'150px',fontSize: '15px',borderRadius: '50px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',}}
          >VIEW MY COURSES!</button>
        </div>
        
        <div style={{ position: 'absolute',top:'250px',right: '33%', display: 'flex', flexDirection: 'column',borderRadius: '50%', border: 'none',opacity:'0.9'}}>
          <button onClick={this.handleRegisterCourse}  className="fancy"
          style={{position:'absolute',color:'rgb(255, 230, 243)',backgroundColor:'black',width:'300px',height:'200px',top:'150px',left:'74%',fontSize: '15px',
          fontWeight: 'bold',
          border: 'none',borderRadius: '50px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'}}>REGISTER FOR NEW COURSE!</button>
        </div>
        <div style={{ clear: 'both' }}></div>

        {showCourses && (
          <div>
            <h2>My Courses</h2>
            <ul>
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
    );
  }
}

export default ViewCourses
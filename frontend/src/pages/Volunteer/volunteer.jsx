import React, { useState } from 'react';
import './volunteer.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import tele from './tele.png';
import myHeader from '../Home/Snippet.png'

import tele from '../Home/tele.png';

const courses = [
  {
    title: 'Robotics',
    description: 'Robotics is a multidisciplinary field that involves the design, construction, operation, and use of robots. A robot is a mechanical or virtual device that can be programmed to perform tasks autonomously or semi-autonomously. Robotics combines principles from various fields such as computer science, electrical engineering, mechanical engineering, and artificial intelligence.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus apehttps://classroom.google.com/c/NjE1NTc3MjczMjQ2?cjc=qgcg3xxriam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTc3MjczMjQ2?cjc=qgcg3xx'
  },
  {
    title: 'Python',
    description: 'Python is a versatile and widely-used programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and aims to provide a clear and concise syntax, making it easy to learn and understand for both beginners and experienced developers.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/u/7/c/NjE1NTg0NTQ2OTYy?pli=1'
  },
  {
    title: 'Web Development',
    description: 'Web development is the process of creating and maintaining websites and web applications. It involves a combination of programming languages, frameworks, and tools to build dynamic and interactive websites that can be accessed over the internet. Web developers use front-end technologies like HTML, CSS, and JavaScript to design the user interface and implement client-side functionalities.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTc1MjE1ODM0?cjc=hharpl3'
  },
  {
    title: 'Algorithms',
    description: 'Algorithms are step-by-step procedures or sets of rules designed to solve specific problems or perform specific tasks. In computer science, algorithms are essential for solving complex computational problems efficiently. They serve as the building blocks of software development and play a crucial role in various domains, including data analysis, artificial intelligence, cryptography, and optimization.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTgzODUxOTY5?cjc=jawvg2c'
  },
  {
    title: 'Data Structures',
    description: 'Data structures are fundamental components of computer science that enable efficient storage, organization, and manipulation of data. They provide a way to represent and manage different types of data in a structured and organized manner. Data structures determine how data is stored in computer memory and how operations can be performed on that data. ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTg0ODE3OTM4?cjc=dvhawhk'
  },
  {
    title: 'Operating Systems',
    description: 'An operating system (OS) is a software program that manages computer hardware and software resources and provides common services for computer programs. It acts as an intermediary between the user and the computer hardware, allowing users to interact with the computer system effectively.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTc1MjE1ODM0?cjc=hharpl3'
  },
  {
    title: 'OOPS',
    description: 'Object-oriented programming is a programming paradigm that organizes software design around objects, which are instances of classes. It emphasizes the concept of encapsulation, where data and the methods that operate on that data are bundled together within objects. OOP promotes modularity, reusability, and flexibility in software development.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTc1MjE1ODM0?cjc=hharpl3'
  },
  {
    title: 'DBMS',
    description: 'A database management system (DBMS) is a software application that allows users to efficiently store, manage, and manipulate structured data. It provides an interface for users to interact with databases, perform queries, and retrieve information. DBMS ensures data integrity, security, and concurrency control in multi-user environments. It allows for the creation, modification, and deletion of data records, as well as the definition and enforcement of data relationships and constraintsLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTc1MjE1ODM0?cjc=hharpl3'
  },
  {
    title: 'Computer Networks',
    description: 'Computer networks refer to interconnected systems of computers and other devices that are linked together to facilitate communication and data exchange. They enable the sharing of resources, such as files, printers, and internet connections, and allow for the transmission of information across various locations.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTc1MjE1ODM0?cjc=hharpl3'
  },
  {
    title: 'Machine Learning',
    description: 'Machine learning is a branch of artificial intelligence that focuses on the development of algorithms and models that enable computers to learn from and make predictions or decisions based on data. It involves designing and training computational systems to automatically learn and improve from experience without being explicitly programmed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom.google.com/c/NjE1NTc1MjE1ODM0?cjc=hharpl3'
  }
];

const Volunteer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState({});

  const coursesPerPage = 5; // Update the number of courses per page

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort courses based on selected sorting option and preserve the original order
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    const identifierA = courses.indexOf(a);
    const identifierB = courses.indexOf(b);
    return identifierA - identifierB;
  });

  // Calculate pagination values
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Handle sorting option change
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    setCurrentPage(1);
  };

  // Handle pagination page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle "Read More" click
  const handleReadMore = (index) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [index]: true
    }));
  };

  // Handle "Read Less" click
  const handleReadLess = (index) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [index]: false
    }));
  };

  return (
    
  
      <> 
      <div>
      <img src={myHeader} style={{width:'100%'}}/>
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
              {/* <Nav.Link href="#">LEARNINGS</Nav.Link> */}
              {/* <NavDropdown title="REGISTER" id="register-dropdown">
              <NavDropdown.Item href="https://forms.gle/13mCom2jDYK83ZRLA">STUDENT</NavDropdown.Item>
              <NavDropdown.Item href="https://forms.gle/vfUK7pAMKwke1xuW9">VOLUNTEERS</NavDropdown.Item>
              </NavDropdown> */}
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


    <div className="body-container">
    <div className="learning-container">
      <h1 style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>LEARNINGS</h1>
      <h2 style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Welcome to the Learning page!</h2>
      <br/>
      <h4 style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Join our classrooms:</h4>

      <div className="filter-section" style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input
          type="text"
          placeholder="Search courses"
          value={searchQuery}
          onChange={handleSearchInputChange}
          style = {{backgroundColor:'rgb(255, 230, 243)',width:'300px',height:'40px',border:'none',borderRadius:'5px'}}
        />
        </div>
        <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
        <select value={sortBy} onChange={handleSortByChange} style = {{backgroundColor:'rgb(255, 230, 243)',border:'none',borderRadius:'5px'}}>
          <option value="title">Sort by Title</option>
          <option value="description">Sort by Description</option>
        </select>
      </div>

      <br/>
      <ul>
        {currentCourses.map((course, index) => (
          <li key={index} className="course-item">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">
              {showFullDescription[index]
                ? course.description
                : `${course.description.slice(0, 100)}...`}
              {!showFullDescription[index] && (
                <Button
                  variant="link"
                  className="read-more"
                  onClick={() => handleReadMore(index)}
                >
                  Read More
                </Button>
              )}
              {showFullDescription[index] && (
                <Button
                  variant="link"
                  className="read-less"
                  onClick={() => handleReadLess(index)}
                >
                  Read Less
                </Button>
              )}
            </p>
            <p>
              Join{' '}
              <a href={course.inviteLink} className="invite-link">
                Course Classroom Link
              </a>
              .
            </p>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <Button
          variant="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{backgroundColor:'rgb(255, 128, 255)',color:'black'}}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastCourse >= sortedCourses.length}
          style={{backgroundColor:'rgb(255, 128, 255)',color:'black'}}
        >
          Next
        </Button>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Volunteer;
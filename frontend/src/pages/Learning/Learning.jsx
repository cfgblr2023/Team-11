import React, { useState } from 'react';
import './Learning.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import tele from '../Home/tele.png';

const courses = [
  {
    title: 'Course 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-1'
  },
  {
    title: 'Course 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-2'
  },
  {
    title: 'Course 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-3'
  },
  {
    title: 'Course 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-4'
  },
  {
    title: 'Course 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-5'
  },
  {
    title: 'Course 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-6'
  },
  {
    title: 'Course 7',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-7'
  },
  {
    title: 'Course 8',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-8'
  },
  {
    title: 'Course 9',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-9'
  },
  {
    title: 'Course 10',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iusto quis nesciunt praesentium impedit totam neque atque, laudantium ipsam inventore excepturi molestiae corporis fuga, necessitatibus blanditiis suscipit dolores accusamus. Repudiandae saepe eos suscipit blanditiis sequi nesciunt dignissimos! Cum voluptatem ex praesentium veniam quae suscipit accusantium consectetur est tempore ipsa?',
    inviteLink: 'https://classroom-invite-link-10'
  }
];

const Learning = () => {
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
      <h1>Learning</h1>
      <p>Welcome to the Learning page!</p>
      <p>Join our classrooms:</p>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search courses"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="title">Sort by Title</option>
          <option value="description">Sort by Description</option>
        </select>
      </div>

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
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastCourse >= sortedCourses.length}
        >
          Next
        </Button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Learning;